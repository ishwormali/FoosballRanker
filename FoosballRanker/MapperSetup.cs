using AutoMapper;
using FoosballRanker.Constants;
using FoosballRanker.Dto;
using FoosballRanker.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoosballRanker
{
    public static class MapperSetup
    {
        public static void Setup()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Participant, ParticipantDto>()
                .ForMember(dto => dto.TotalMatches, m => m.MapFrom(s => s.Matches.Count))
                .ForMember(dto => dto.TotalWins, m => m.MapFrom(s => s.Matches.Where(mp => mp.MatchResult== MatchResultConstants.Win).Count()))
                .ForMember(dto => dto.TotalLosses, m => m.MapFrom(s => s.Matches.Where(mp => mp.MatchResult == MatchResultConstants.Loss).Count()))
                .ForMember(dto=>dto.TotalDraws,m=> m.MapFrom(s => s.Matches.Where(mp => mp.MatchResult == MatchResultConstants.Draw).Count()))
                .Include<Participant,ParticipantDetailsDto>()
                ;

                cfg.CreateMap<Participant, ParticipantDetailsDto>();

                cfg.CreateMap<MatchParticipant, MatchParticipantDto>()
                .ForMember(dto => dto.ParticipantId, map => map.MapFrom(s => s.ParticipantId))
                .ForMember(dto => dto.Name, map => map.MapFrom(s => s.Participant.Name))
                ;

                cfg.CreateMap<Match, MatchDto>()
                .ForMember(dto => dto.DateCreatedFormatted, map => map.MapFrom(s => s.CreatedDate.ToShortDateString()))
                .ForMember(dto => dto.WinnerId, map => map.MapFrom(s => s.Participants.Any(p => p.MatchResult == MatchResultConstants.Win) ? s.Participants.FirstOrDefault(p => p.MatchResult == MatchResultConstants.Win).Id : 0))
                .ForMember(dto => dto.Winner, map => map.MapFrom(s => s.Participants.Any(p => p.MatchResult == MatchResultConstants.Win) ? s.Participants.FirstOrDefault(p => p.MatchResult == MatchResultConstants.Win).Participant.Name: "Draw"))
                ;

            });
            
        }
    }
}
