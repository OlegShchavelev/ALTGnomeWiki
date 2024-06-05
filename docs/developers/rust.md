# Rust

Rust — современный системный язык программирования, разработанный для обеспечения безопасности, скорости и параллелизма. Он известен своей строгой системой типов и защитой от ошибок.

## Установка из репозитория

**Rust** можно установить через терминал:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install rust-cargo
```

```shell[epm]
epm -i rust-cargo
```

:::

## Установка с официального сайта

**Rust** можно установить через терминал:

```shell
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

## Обновление

::: info
Только при установке с официального сайта.
:::

```shell
rustup update
```

## Использование Rust

### Создание нового проекта:

```shell
cargo new NAME
```

`NAME` — название проекта.

::: details Пример архитектуры

```shell
new_project
├── Cargo.lock
├── Cargo.toml
├── .git/
├── .gitignore
└── src/
    └── main.rs
```

:::

### Указание зависимостей:

```shell
cargo add NAME
```

`NAME` — название зависимости.

### Dev сборка:

```shell
cargo build
```

### Release Сборка:

```shell
cargo build --release
```

### Запуск проекта:

```shell
cargo run
```
