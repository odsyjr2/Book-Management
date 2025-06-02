package com.aivle.book_management.controller;

import com.aivle.book_management.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Profile;
import org.springframework.web.bind.annotation.*;

@Profile("dev")
@RestController
@RequestMapping("/dev")
@RequiredArgsConstructor
public class DevController {

    private final BookService bookService;

    @PostMapping("/insert-sample-books")
    public String insertSampleBooks() {
        bookService.insertSampleBooks();
        return "샘플 책 10권 삽입 완료";
    }

    @DeleteMapping("/delete-all-books")
    public String deleteAllBooks() {
        bookService.deleteAllBooks();
        return "모든 책 삭제 완료";
    }
}
