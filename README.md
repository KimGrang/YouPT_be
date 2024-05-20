<div align="center">
  <img src="https://github.com/you-pt/fe/assets/64675543/bc080107-966b-4738-86ee-263ae2a1a650" width="350px" />
</div>

# YOU-PT 당신을 위한 홈 트레이닝 서비스

## Introduction
- 실시간 PT 서비스
  - 화상 채팅을 통한 자세 관리
  - 실시간 채팅으로 자유로운 의사소통과 피드백
- AI 식단관리 서비스
- 운동 스케줄 관리 기능

## Getting Started
- Released Link : [link_1](https://jd-develop.shop/) or [link_2](https://youpt.netlify.app/)

## Skills
- Server
  - Nest JS
- Database
  - MySQL
  - Redis
- Deployment Tools
  - Github Actions
  - Amazon ECS
- Logging Tools
  - Elastic Search
  - Kibana
  - Fluentd
- Others
  - OpenAI
  - Socket.IO
  - Firebase

## Contributors
  - [zindong](https://github.com/Jindonglee)
  - [lyukidon](https://github.com/lyukidon)
  - [KimGrang](https://github.com/KimGrang)
  - [Uhan33](https://github.com/Uhan33)
  - [HyeIn Koo](https://github.com/ghi3621)


## OpenAI API PART READ.ME
  - 1) 자체 개발 모델이나 GPT 파인튜닝 대신 기본 모델에 프롬프트 엔지니어링을 적용
      - 자체 모델을 제작하기에는 시간, 금전적인 여유가 부족
      - API로 사용하는 것을 추천받음
      - finetuning의 경우 건당 비용이 매우 큼
      - 프롬프트 엔지니어링을 통해 기본 모델 성능을 끌어올리기로 결정
        
  - 2) 이미지 인식과 텍스트 생성을 위해 GPT-4와 GPT-3.5를 사용
      - 프롬프트를 영어로 작성
      - 1회 호출당 6000toekn을 소모하던 API가 약 3000token을 사용
      - API 호출 가능 횟수 3~4회로 증가
      - 여전히 적은 횟수의 호출만이 가능
      - 추후 여러 API Key를 돌려가며 사용하는 등의 방법 구현 필요
        
  - 3) 사진 인식과 식단 평가 기능의 분당 최대 요청 가능 토큰 수 초과 문제
      - Throttler를 적용하여 분당 최대 요청 횟수를 제한
      - 프로젝트 전체에 Throttler를 적용하여 악의적인 호출을 막음
        
  - 4)  Google translate API를 사용한 번역 프로세스
      - 출력이 영어라 불편하다는 피드백에 대한 개선
      - gpt를 사용한 번역의 경우 퀄리티가 떨어짐
      - 또한 topken 소모량의 증가로 429에러를 발생시킬 가능성
      - google이 제공하는 translate api를 사용
      - 번역 퀄리티와 사용량 제한을 해결
      - 그러나, 낮은 티어 api 사용시 매우 적은 호출만 가능

  - 5) RoleGuard를 기반으로한 권한 관리
      - 일반 유저와 트레이너 유저의 접근 가능 기능 차이
      - ioredis를 사용하여 호출 시간을 줄여보기

