# Разработка GTK4/Adwaita на языке Rust

## Установка зависимостей

```zsh
su - 
apt-get install libadwaita-devel libgtk4-devel libgdk-pixbuf-devel libpango-devel libcairo-gobject-devel libgio-devel libcairo-devel rust rust-cargo
```

## Пример приложения Adwaita

```zsh
cd ~/projects
cargo new hello_adwaita --bin

cd hello_adwaita
cargo add libadwaita --rename adw --features gtk_v4_10
vscodium .
```

```rust
use adw::prelude::*;
use adw::{
    Application, 
    ApplicationWindow,
    HeaderBar
};
use adw::gtk::{
    Label, Box, Orientation
};

const APP_ID: &str = "hello_adwaita";

fn main() {
    let app = Application::builder()
    .application_id(APP_ID)
    .build();

    app.connect_activate(build_ui);
    app.run();
}

fn build_ui(app: &Application) {

    // Строим лейбл
    let label = Label::builder()
    .label("Hello Adwaita")
    .margin_top(10)
    .margin_bottom(10)
    .margin_start(10)
    .margin_end(10)
    .build();

    // Строим контент
    let content = Box::new(Orientation::Vertical, 0);
    content.append(&HeaderBar::new()); // для показа меню
    content.append(&label);

    // Строим окно
    let window = ApplicationWindow::builder()
    .application(app)
    .title("Hello Adwaita")
    .default_width(300)
    .default_height(200)
    .content(&content)
    .build();

    window.present();
}
```

### Материалы

[GTK-RS.org](https://gtk-rs.org)
