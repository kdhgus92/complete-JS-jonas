# Section 11: Working With Arrays

## 144. Project: "Bankist" App

bankist.netify.app
Gloabal variable로 시작하지 말고 function 안으로 사용할 Parameter를 넘겨라

## 147. Data Transformations: map, filter, reduce

- map
- filter
- reduce

## 161. Sorting Array

## 162. More ways to creating and filling arrays

함수의 파라미터를 `_`(underscore)로 처리하면 날려버린다는 의미이다.

## 163. 요약

어떤 Array Method를 사용해야할까? �

원본 Array 변경
약

- 원본 Array에 요소 추가
  `.push` (start)
  `.unshift` (end)

- 원본 Array에서 요소 제거
  `.pop` (end)
  `.shift` (start)
  `.splice` (any)

- 기타
  `.reverse`
  `.sort`
  `.fill`

새로운 Array 생성

- 원본으로부터 새로 계산
  `.map` (loop)

- 조건을 이용한 필터링
  .filter
- 원본의 일부 잘라내기
  .slice

- 원본에 새로운 배열 추가
  .concat

- 평탄화 하기
  .flat
  .flatMap

# 인덱스 관련

- 값에 기반
  .indexOf
- 테스트 조건에 기반
  .findIndex

# Array element

- 테스트 조건 기반
  .find

# 포함 여부 확인하기

- 값
  .includes
- 테스트 조건
  .some
  .every

# 새 문자열

- 분리 문자
  .join

# 값으로 바꾸기

- 누적기
  .reduce

# 단순 Array loop

- callback 기반
  .forEach
