# 📚 Book-Management

KT AIVLE School 4차 미니프로젝트: **Spring Boot + React 기반 도서 관리 및 AI 표지 생성 시스템**

## 🔧 Backend 구성

- **언어/프레임워크**: Java 17, Spring Boot
- **ORM**: Spring Data JPA
- **DTO/Entity 매핑**: MapStruct 사용
- **문서화 도구**: Swagger (springdoc-openapi)
- **빌드 도구**: Gradle
- **자동 API 문서 UI**: [http://localhost:8080/swagger-ui/index.html](http://localhost:8080/swagger-ui/index.html)

### 🧵 DataBase 변수 설정
- MacOS
  - ```export H2_DB_PATH=jdbc:h2:$경로```
- Windows
  - ```set H2_DB_PATH=jdbc:h2:$경로```
## 📦 주요 디렉토리 구조

```
├── controller        
│   └── BookController.java
│   └── GlobalExceptionHandler.java
├── dto              
│   └── BookDto.java
├── entity           
│   └── Book.java
├── mapper  구조
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
