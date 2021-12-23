# 항해99 clone coding frontend

Airbnb clone coding

- https://www.airbnb.co.kr/

배포완료

- http://airfnf.s3-website.ap-northeast-2.amazonaws.com/

## 팀원

Frontend (React)

- 배재경, 박시영, 류은설

Backend (Spring)

- 남우식, 이다담, 김가민

## 프로젝트 기간

18oct ~ 22oct

## 프로젝트 상세 과정

https://foregoing-ursinia-218.notion.site/6-a58fc78b1fb44f15a797c19f3ee83e2d

## Github organization

https://github.com/hanghae11

## Frontend Tech Spec

- React
- Redux
- Redux Thunk
- Immer

# 주요 기능

- 회원가입 및 로그인, 로그아웃 (jwt)
- 로그인을 통해 인증된 유저만 서비스 이용가능
- 검색 기능 (위치별 숙소 카테고리로 나눈 검색 가능)

# Project 기간 중 고민했던 기술적 요소

1. wish 기능 구현시 wishList명을 유저가 정할 수 있어서 서버에서 해당 wishList에 해당하는 게시물리스트를 받아서 구현하려고 했으나, 게시물 목록에서는 해당 리스트에 해당하는 wish만 표시되는것이 아니라 모든 wish가 표시되므로 위시리스트페이지를 구현하지 않는다면 wishList 이름을 정해서 응답을 받을 의미가 없다.
   => wish 여부만 응답으로 받는다.

2. 포스팅 기능 구현의 필요 ? 상세페이지에서 후기를 남기는 기능과 평점으로 대신한다? 호스트 인증을 받지않고 로그인한 유저가 숙소를 등록할 수 있도록 한다
=> Airbnb에서는 host를 증명한 유저에게만 포스팅을 할 수 있는 권한을 부여하기 때문에 시간과 여건상 포스팅 기능 구현이 어려울 것으로 판단되어 제외하였으나, CRUD 흐름 상 포스팅 기능을 추가하는 것이 옳을 것이라는 피드백과 의견을 종합하여 host 권한을 따로 부여하지 않고 로그인한 모든 유저에게 포스팅 권한을 부여하는 방식으로 구현

3. 응답받을 데이터의 범위
