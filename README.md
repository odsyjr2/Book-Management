# 📚 Book-Management

KT AIVLE School 4차 미니프로젝트: **Spring Boot + React 기반 도서 관리 및 AI 표지 생성 시스템**

## 🔧 Backend 구성

- **언어/프레임워크**: Java 17, Spring Boot
- **ORM**: Spring Data JPA
- **DTO/Entity 매핑**: MapStruct 사용
- **문서화 도구**: Swagger (springdoc-openapi)
- **빌드 도구**: Gradle
- **자동 API 문서 UI**: [http://localhost:8080/swagger-ui/index.html](http://localhost:8080/swagger-ui/index.html)

## 📦 주요 디렉토리 구조

```
├── controller        
│   └── BookController.java
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
