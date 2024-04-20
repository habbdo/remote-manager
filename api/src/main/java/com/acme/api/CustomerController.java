package com.acme.api;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
public class CustomerController {
    private final List<Customer> customers = List.of(
        new Customer("1", "John", "Doe")
    );

    @GetMapping("/customers")
    ListView<Customer> list() {
        return new ListView<>(customers, customers.size());
    }
}
