package com.aivle.book_management.controller;

import com.aivle.book_management.dto.BookDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/books")
public class BookController {

//    TODO: Service 완성 시 연동
//    public final BookService bookService;

    @PostMapping
    public ResponseEntity<?> createBook(@RequestBody BookDto.Post request) {
        // 임시 응답 반환
        return ResponseEntity.ok("✅ POST 요청: " + request.getTitle());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getBookById(@PathVariable Long id) {
        return ResponseEntity.ok("✅ GET 요청 (id=" + id + ")");
    }

    @GetMapping
    public ResponseEntity<?> getAllBooks() {
        return ResponseEntity.ok("✅ 전체 조회 GET 요청");
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> updateBook(@PathVariable Long id, @RequestBody BookDto.Patch request) {
        return ResponseEntity.ok("✅ PATCH 요청 (id=" + id + ")");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBook(@PathVariable Long id) {
        return ResponseEntity.ok("✅ DELETE 요청 (id=" + id + ")");
    }


}
