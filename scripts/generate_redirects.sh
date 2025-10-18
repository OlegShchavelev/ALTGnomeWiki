#!/bin/bash

if [ $# -eq 0 ]; then
    echo "Ошибка: Не указан выходной файл"
    echo "Использование: $0 <выходной_файл>"
    exit 1
fi

output_file="$(pwd)/$1"

> "$output_file"

cd docs/ru

for dir in */; do
    dir_name="${dir%/}"

    if [ -n "$(find "$dir_name" -maxdepth 1 -type d ! -path "$dir_name" | head -n 1)" ]; then
        for subdir in "$dir_name"/*/; do
            if [ -d "$subdir" ]; then
                subdir_name="${subdir%/}"
                subdir_basename=$(basename "$subdir_name")

                echo "/$subdir_basename/ /$subdir_name/ 301" >> "$output_file"
            fi
        done
    fi
done

echo "Список сохранен в файл: $output_file"
