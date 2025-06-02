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
├── controller        
│   └── BookController.java
│   └── GlobalExceptionHandler.java
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
