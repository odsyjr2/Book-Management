# 📚 Book-Management

KT AIVLE School 4차 미니프로젝트: **Spring Boot + React 기반 도서 관리 및 AI 표지 생성 시스템**

## 🔧 Backend 구성

- **언어/프레임워크**: Java 17, Spring Boot
- **ORM**: Spring Data JPA
- **DTO/Entity 매핑**: MapStruct 사용
- **문서화 도구**: Swagger (springdoc-openapi)
- **빌드 도구**: Gradle
- **자동 API 문서 UI**: [http://localhost:8080/swagger-ui/index.html](http://localhost:8080/swagger-ui/index.html)

---
## 개발 환경 구성
### 🧵 DataBase 변수 설정
- MacOS
  - ```export H2_DB_PATH=jdbc:h2:$경로```
- Windows
  - ```set H2_DB_PATH=jdbc:h2:$경로```

### 📚 샘플 Book 데이터 삽입 및 삭제 방법
- 📤 샘플 Book 데이터 삽입

  - ✅ curl 사용 (터미널)

    ```curl -X POST http://localhost:8080/dev/insert-sample-books```

  - ✅ Postman 사용

    Method: POST

    URL: http://localhost:8080/dev/insert-sample-books

    Body: 없음

- 🧹 전체 Book 데이터 삭제

  - ✅ curl 사용

    ```curl -X DELETE http://localhost:8080/dev/delete-all-books```

  - ✅ Postman 사용
  
    Method: DELETE
  
    URL: http://localhost:8080/dev/delete-all-books
  
    Body: 없음

---

## 📦 주요 디렉토리 구조

```
├── config
│   └── WebConfig.java
├── controller        
│   └── BookController.java
│   └── GlobalExceptionHandler.java
│   └── DevController.java
├── dto              
│   └── BookDto.java
├── entity           
│   └── Book.java
├── mapper           
│   └── BookMapper.java
├── repository       
│   └── BookRepository.java
├── service             
│   └── BookService.java
└── BookManagementApplication.java  
```

## 🖥 Frontend 구성

- **프레임워크**: React
- **UI스타일**: Material UI
- **라우팅**: React Router 
- **HTTP 클라이언트**: axios
- **API 통신 모듈화**: /api/booservice.js 내 axios 함수 정의/사용
- **이미지 생성**: OpenAI API 연동

## 주요 기능

✅ 도서 등록 / 수정
- 제목, 내용 입력
- OpenAI API 키를 직접 입력하고 이미지 생성
- 이미지 미리보기 가능

✅ 도서 목록 / 검색
- 백엔드에서 전체 도서 목록을 불러옴
- 제목 기반 검색 필터링
- 도서 클릭 시 상세/수정 페이지 이동

✅ 도서 삭제
- 삭제 버튼 클릭 시 사용자 확인창 띄움

## 📦 구성 파일 및 컴포넌트 구조
```
src/
├── api/
│   └── bookservice.js               
│
├── components/
│   ├── BookCard.jsx
│   ├── SimpleBookCard.jsx
│   ├── GenerateImageButton.jsx
│   ├── Header.jsx
│   ├── ImagePreview.jsx
│   ├── NextButton.jsx
│   └── WritingForm.jsx
│
├── pages/
│   ├── BookListPage.jsx
│   ├── BookEditPage.jsx
│   ├── NewBook.jsx
│   ├── MainPage.jsx
│   └── GenerateImage.jsx
│
├── App.js
├── index.js
├── openAiService.js
└── data.json
