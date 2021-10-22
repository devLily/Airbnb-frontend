# 항해99 clone coding frontend

Airbnb clone coding

- https://www.airbnb.co.kr/

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
- 검색 기능 (위치별 숙소, 숙소별 특징 카테고리로 나눈 검색 가능)
- 검색 결과 리스트 페이지에서 위시 아이템 선택 기능
- 상세 페이지에서 해당 숙소에 대한 후기 코멘트 기능
- 추가) 숙소에 대한 몇 가지 평가 항목에서 평점을 선택할 수 있고 해당 숙소에 대한 총 평점 평균을 확인할 수 있음

# Project 기간 중 고민했던 기술적 요소

Day1

1. wish 기능 구현시 wishList명을 유저가 정할 수 있어서 서버에서 해당 wishList에 해당하는 게시물리스트를 받아서 구현하려고 했으나, 게시물 목록에서는 해당 리스트에 해당하는 wish만 표시되는것이 아니라 모든 wish가 표시되므로 위시리스트페이지를 구현하지 않는다면 wishList 이름을 정해서 응답을 받을 의미가 없다.
   => wish여부만 응답으로 받는다.

2. 포스팅 기능 구현의 필요 ? 상세페이지에서 후기를 남기는 기능과 평점으로 대신한다? 호스트 인증을 받지않고 로그인한 유저가 숙소를 등록할 수 있도록 한다
3. 응답받을 데이터의 범위

에어비앤비 웹 랜더 속도 느리다. div파티라서 그런것같다
