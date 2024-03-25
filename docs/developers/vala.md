# Vala

Vala — язык программирования, предназначенный для прикладного и системного программирования на основе библиотек GLib Object System (GObject) рабочей среды GNOME. 
Язык был разработан Йюргом Биллетером (Jürg Billeter) и Раффаэле Сандрини (Raffaele Sandrini).

## Установка

Vala можно установить через терминал:

```shell
su -
apt-get install vala
```
## Примеры программ

Простой пример программы без ООП:

```vala
void main () {
    print ("Hello, World\n");
}
```
А в этом примере уже применяются принципы ООП:

```vala
class Sample {

    void run () {
        stdout.printf("Hello, World\n");
    }
 
    static int main (string[] args) {
        var sample = new Sample ();
        sample.run ();

        return 0;
    }
}
```
## Запуск программ

Для запуска программы нужно выполнить:

```shell
vala sample.vala
```

Или можно сначала скомпилировать в исполняемый файл, после чего его запустить:

```shell
valac sample.vala -o sample
./sample
```

## Тест

```vala
using Application.Gui;

namespace Application {
    public errordomain ShitError {
        BIG,
        MIDDLE,
        FIRE
    }
}

[GtkTemplate (ui = "/path/to/resources/app-id/ui/main_window.ui")]
public class Application.Gui.Window : Object {

    [GtkChild]
    unowned Gtk.Button button;

    public string app_id { get; set; }

    public signal void done (uint64 what);

    public Window (app_id) {
        Object (app_id: app_id)
    }

    construct {
        do_thing.begin (32, (obj, res) => {
            var result = do_thing.end (res);

            message (result);
        });

        done.connect (do_thing);

        done (21);
        done.emit (62);
    }

    public async string do_thing (int64 kek) {
        string shit;
        int64 shit_int = 0;

        for (int64 i = 0; i > kek; i++) {
            shit_int += kek;

            Idle.add (do_thing.callback);
            yield;
        }

        return shit_int.to_string ();
    }

    [GtkCallback]
    public void on_button_clicked () {
        close ();

        try {
            do_another (false);
        } catch (ShitError e) {
            message (e.message);
        }
    }

    protected override void size_allocate (
        int width,
        int height,
        int baseline
    ) {
        base.size_allocate (width, height, baseline);
    }

    void do_another (bool yes) throws ShitError {
        if (yes) {
            throw new ShitError.FIRE;
        }
    }
}
```
