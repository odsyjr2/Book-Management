package com.aivle.book_management.mapper;

import com.aivle.book_management.dto.BookDto;
import com.aivle.book_management.dto.BookDto.Response;
import com.aivle.book_management.entity.Book;
import java.util.List;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring")
public interface BookMapper {

    // POST → Entity
    @Mapping(target = "id", ignore = true)
    Book PostDTOtoEntity(BookDto.Post dto);

    // PATCH → 기존 Entity에 덮어쓰기 (null은 무시)
    @Mapping(target = "id", ignore = true)
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updateFromPatch(BookDto.Patch patchDto, @MappingTarget Book book);

    // Entity → Response
    BookDto.Response toResponse(Book book);

    // Entity List → Response List
    List<Response> toResponseList(List<Book> books);

}
