# Vala

Vala — язык программирования, предназначенный для прикладного и системного программирования на основе библиотек GLib Object System (GObject) рабочей среды GNOME. 
Язык был разработан Йюргом Биллетером (Jürg Billeter) и Раффаэле Сандрини (Raffaele Sandrini).

## Установка

Vala можно установить через терминал:

```shell
sudo apt-get install vala
```
## Примеры программ

Простой пример программы без ООП:

```vala
void main()
{
  print("Hello, World\n");
}
```
А в этом примере уже применяются принципы ООП:

```vala
class Sample
{
    void run()
    {
        stdout.printf("Hello, World\n");
    }
 
    static int main(string[] args)
    {
        var sample = new Sample();
        sample.run();
        return 0;
    }
}
```
## Запуск программ

Для запуска программы ее нужно сначала скомпилировать:

```shell
valac sample.vala
```
А для запуска нужно просто скомандовать:

```shell
./sample
```
