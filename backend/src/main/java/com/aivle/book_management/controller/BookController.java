package com.aivle.book_management.controller;

import com.aivle.book_management.dto.BookDto;
import com.aivle.book_management.entity.Book;
import com.aivle.book_management.mapper.BookMapper;
import com.aivle.book_management.service.BookService;
import java.util.List;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/books")
@RequiredArgsConstructor
public class BookController {

    private final BookService bookService;
    private final BookMapper bookMapper;

    @PostMapping
    public ResponseEntity<?> createBook(@RequestBody BookDto.Post request) {
        Book book = bookMapper.PostDTOtoEntity(request);
        Book saved = bookService.createBook(book);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(Map.of("status", "success", "data", bookMapper.toResponse(saved)));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getBookById(@PathVariable Long id) {
        Book book = bookService.getBookById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "도서를 찾을 수 없습니다."));
        return ResponseEntity.ok(Map.of("status", "success", "data", bookMapper.toResponse(book)));
    }

    @GetMapping
    public ResponseEntity<?> getAllBooks() {
        List<Book> books = bookService.getAllBooks();
        return ResponseEntity.ok(Map.of("status", "success", "data", bookMapper.toResponseList(books)));
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> updateBook(@PathVariable Long id, @RequestBody BookDto.Patch request) {
        Book book = bookService.getBookById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "도서를 찾을 수 없습니다."));

        bookMapper.updateFromPatch(request, book);
        Book updated = bookService.updateBook(id, book);

        return ResponseEntity.ok(Map.of("status", "success", "data", bookMapper.toResponse(updated)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBook(@PathVariable Long id) {
        bookService.deleteBook(id);
        return ResponseEntity.ok(
                Map.of("status", "success", "message", "도서가 삭제되었습니다.")
        );
    }
//    @DeleteMapping("/")
//    public ResponseEntity<?> deleteAllBooks() {
//        bookService.deleteAllBooks();
//        return ResponseEntity.ok("모든 책 삭제 완료");
//    }

}
