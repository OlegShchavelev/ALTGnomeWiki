# Разработка GTK4/Adwaita на языке Vala

## Установка зависимостей:

```shell
su - 
apt-get install libadwaita-devel libgtk4-devel vala
```

## Пример приложения Adwaita

Создаем файл sample.vala в любом удобном месте.

### Вставляем следующий код в файл sample.vala:

```vala
int main (string[] argv) {
    // Создаем приложение.
    var app = new Adw.Application ("com.example.GtkApplication", GLib.ApplicationFlags.FLAGS_NONE);
    app.activate.connect (() => {
        var window = new Adw.ApplicationWindow (app);
        var label = new Gtk.Label ("Hello, World!");
        //Создаем заголовок окна.
        var headerbar = new Adw.HeaderBar ();
        //Создаем контейнер и упаковываем в него заголовок и метку.
        var box = new Gtk.Box (Gtk.Orientation.VERTICAL, 0);
        box.append (headerbar);
        box.append (label);
        //Устанавливаем контент для окна и показываем его.
        window.set_content (box);
        window.present ();
    });
    return app.run (argv);
```

### Собираем и запускаем приложение:

```shell
valac --pkg gtk4 --pkg libadwaita-1 sample.vala
./sample
```

![app](/vala/gtk4-applications/app.png)

### Материалы для изучения

[Официальный сайт Vala](https://vala.dev/)
