package com.acme.api;

import java.util.List;

public record ListView<T>(
    List<T> data,
    int length
) {
}
