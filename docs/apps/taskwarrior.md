# Taskwarrior
Taskwarrior - приложение для управления задачами с широкими возможностями по кастомизации, с текстовым интерфейсом. 

## Создание задач
Для добавления новой задачи достаточно выполнить команду:
**task add название задачи**

Пример:
``` bash
$ task add Бросить кабель 
Created task 1.

$ task add Купить кабельканал
Created task 2.

$ task add Купить кабель ВВГ 3х2,5
Created task 3.

$ task list

ID Age  Description                 Urg 
 1 1min Бросить кабель                 0
 2 59s  Купить кабельканал             0
 3 28s  Купить кабель ВВГ 3х2,5        0

3 tasks
```
::: info
В задаче 2 ошибка сделана намеренно, будем исправлять чуть ниже.
:::

### Задача с датой завершения, высоким приоритетом и проектом.
Дата указывается в параметре: **due**
дату можно указывать в формате: 20th - для текущего месяца
иди полностью: 2024-06-20
приоритет: **priority**
проект: **project**
``` bash
$ task add project:Еда due:2024-06-24 priority:H сделать окрошку
Created task 5.
The project 'Еда' has changed.  Project 'Еда' is 0% complete (2 of 2 tasks remaining).

$ task list

ID Age  D P Project Tags     Due        Description                 Urg 
 4 4min   H Еда              2024-06-24 сделать окрошку             11.9
 2 5h       покупки дача дом            Купить кабель ВВГ 3х2,5      9.9
 3 3h       покупки дача дом            Купить саморезы              1.9
 1 5h   D   ремонт  дом                 Срочно Бросить кабель       -3.2

4 tasks
```

## Изменение задачи
Изменение названия задачи выполняется с применением команды modify
``` bash 
$ task 2 modify кабель-канал
$ task list

ID Age  Description                 Urg 
 1 1min Бросить кабель                 0
 2 59s  Купить кабель-канал            0
 3 28s  Купить кабель ВВГ 3х2,5        0

3 tasks
```

Для полностью ручного изменения задачи используется команда edit
``` bash 
$ task 1 edit
```
Откроется внешний редактор с подробными данными о задаче (целиком приводить его нет смысла - он достаточно объемный).

::: info
Под ALT Linux наблюдается проблема при использовании GVim - открывается пустой файл, что-то с передачей пути, поэтому предварительно можно выбрать любой другой редактор.
:::

``` bash
VISUAL="mousepad"

$ task 1 edit
```

### Изменение названия у задачи 
Существует возможность изменения задачи без применения modify и последующего написания нового обновленного текста, или использования edit.
**append** - для добавления в конец
**prepend** - для добавления к началу

Пример append
``` bash 
$ task 1 append до сарая
Appending to task 1 'Бросить кабель до сарая'.
Appended 1 task.
Project 'ремонт' is 0% complete (1 task remaining).

$ task list

ID Age   D Project Description                 Urg 
 2 57min   покупки Купить кабель-канал            9
 3 56min   покупки Купить кабель ВВГ 3х2,5        9
 1 57min D ремонт  Бросить кабель до сарая       -4

3 tasks
```

пример prepend
``` bash
$ task 1 prepend Срочно 
Prepending to task 1 'Срочно Бросить кабель до сарая'.
Prepended 1 task.
Project 'ремонт' is 0% complete (1 task remaining).

```

### Добавить дату завершения у задачи
``` bash
$ task 1 modify due:2024-06-30
Modifying task 1 'Срочно Бросить кабель'.
Modified 1 task.
Project 'ремонт' is 0% complete (1 task remaining).
```

Так-же taskwarrior предлагает следующие даты: 
**scheduled** - дата подразумевающая, что данную задачу можно выполнить заранее due, и по прошествии указанной в scheduled даты - к задаче автоматически автоматически добавляется тег READY.
**wait** - позволяет не отображать задачу в списках до наступления указанной даты.

#### Просмотр списка задач с заполненой датой в атрибуте waiting
``` bash
$ task waiting
```

## Отмена последних внесенных изменений
Как же мы и здесь без всемогущего undo.
``` bash 
$ task undo
```
![Результат отмены](/taskwarrior/task_undo.png)

## Сделать задачу активной
``` bash
$ task 2 start
Starting task 2 'Купить кабель-канал'.
Started 1 task.
Project 'покупки' is 0% complete (2 of 2 tasks remaining).
 ```

# Остановить задачу 
``` bash
$ task 2 stop
Stopping task 2 'Купить кабель-канал'.
Stopped 1 task.
Project 'покупки' is 0% complete (2 of 2 tasks remaining).
 ```

# Список активных задач
``` bash
$ task active
No matches.
```

Нет в списке активных задач, запустим задачу 2
``` bash
$ task 2 start
Starting task 2 'Купить кабель ВВГ 3х2,5'.
Started 1 task.
Project 'покупки' is 50% complete (1 of 2 tasks remaining).

$ task active

ID Started    Active Age Project Description            
 2 2024-06-15 2s     1h  покупки Купить кабель ВВГ 3х2,5

1 task
```

## Завершение задачи
``` bash
$ task 2 done
Completed task 2 'Купить кабель-канал'.
Completed 1 task.
The project 'покупки' has changed.  Project 'покупки' is 50% complete (1 of 2 tasks remaining).
```
После завершения задачи у нее удаляется ID, остается только UUID идентификатор.

## Удаление задачи
Для удаления задачи используется команда **delete**

Пример:
``` bash
task 4 delete
 ```

## Копирование задачи
Для создания копии задачи используется команда duplicate, не копируются данные о зависимостях задачи и ее приоритет.

``` bash
$ task 2 duplicate
Duplicated task 2 'Купить кабель ВВГ 3х2,5'.
Created task 3.
Duplicated 1 task.
The project 'покупки' has changed.  Project 'покупки' is 33% complete (2 of 3 tasks remaining).

$ task list

ID Active Age D Project Description                 Urg 
 2 15min  1h    покупки Купить кабель ВВГ 3х2,5       13
 3        2s    покупки Купить кабель ВВГ 3х2,5        1
 1        1h  D ремонт  Срочно Бросить кабель         -4

3 tasks
```

## Теги
### Добавление тега к задаче
``` bash
$ task 3 modify +дача
Modifying task 3 'Купить саморезы'.
Modified 1 task.
Project 'покупки' is 33% complete (2 of 3 tasks remaining).
[danila@zoidberg:~ $ task list

ID Age  D Project Tags Description                 Urg 
 2 2h     покупки      Купить кабель ВВГ 3х2,5        9
 3 7min   покупки дача Купить саморезы              1.8
 1 2h   D ремонт       Срочно Бросить кабель         -4

3 tasks
```


Добавим несколько тегов к двум задачам:
``` bash
$ task 2 3 modify +дача,дом
Modifying task 2 'Купить кабель ВВГ 3х2,5'.
Modifying task 3 'Купить саморезы'.
Modified 2 tasks.
Project 'покупки' is 33% complete (2 of 3 tasks remaining).

$ task list

ID Age   D Project Tags     Description                 Urg 
 2 2h      покупки дача дом Купить кабель ВВГ 3х2,5      9.8
 3 49min   покупки дача дом Купить саморезы              1.8
 1 2h    D ремонт  дом      Срочно Бросить кабель       -3.2

3 tasks
```

### Список тегов
``` bash
$ task tags

Tag  Count
дача     2
дом      3
```

### Список задач с определенным тегом
``` bash
$ task +дача
[task next ( +дача )]

ID Age   Project Tag      Description             Urg 
 2 2h    покупки дача дом Купить кабель ВВГ 3х2,5  9.9
 3 58min покупки дача дом Купить саморезы          1.9

2 tasks
```

## Управление приоритетом задачи
Для управления приоритетом используются уровни: 
**H** - высокий,
**M** - обычный (средний),
**L** - низкий
Пример установки для задачи 2 высокого приоритета
``` bash
task 2 modify priority:H
```


## Связывание задач в цепочки
Для управления зависимостями задачи от одной или нескольких других используется свойство **depends**.

Пример установки зависимости задачи 1 от задач 2 и 3
``` bash
$ task 1 modify depends:3
Modifying task 1 'Бросить кабель'.
Modified 1 task.

$ task 1 modify depends:2
Modifying task 1 'Бросить кабель'.
Modified 1 task.

$ task list

ID Age  D Description                 Urg 
 2 4min   Купить кабель-канал            8
 3 4min   Купить кабель ВВГ 3х2,5        8
 1 5min D Бросить кабель                -5

3 tasks

```

## Добавление задачи в проект
Задачи можно группировать по проектам, это позволит фильтровать дополнительно к тегам.

Пример добавления задачи 1 в проект *ремонт*, а 2 и 3 в проект *покупки*.
``` bash
$ task 1 modify project:ремонт
Modifying task 1 'Бросить кабель'.
Modified 1 task.
The project 'ремонт' has changed.  Project 'ремонт' is 0% complete (1 task remaining).

$ task list
ID Age  D Project Description                 Urg 
 2 6min           Купить кабель-канал            8
 3 6min           Купить кабель ВВГ 3х2,5        8
 1 7min D ремонт  Бросить кабель                -4


$  task 2 3 modify project:покупки
Modifying task 2 'Купить кабель-канал'.
Modifying task 3 'Купить кабель ВВГ 3х2,5'.
Modified 2 tasks.
The project 'покупки' has changed.  Project 'покупки' is 0% complete (2 of 2 tasks remaining).

$ task list

ID Age  D Project Description                 Urg 
 2 9min   покупки Купить кабель-канал            9
 3 9min   покупки Купить кабель ВВГ 3х2,5        9
 1 9min D ремонт  Бросить кабель                -4

3 tasks


```


## Добавление собственных атрибутов задачам
Существует возможность добавления собственных атрибутов для задач, реализовано это за счет использования префикса UDA (user defined attributes) в конфигурационном файле.

### Добавить атрибут *стоимость*
Первым делом добавим тип данных для атрибута:
``` bash
$ task config uda.cost.type numeric
Are you sure you want to add 'uda.cost.type' with a value of 'numeric'? (yes/no) yes
Config file ~/.taskrc modified.
```
Теперь необходимо добавить отображаемую метку:
``` bash
$ task config uda.cost.label Стоимость
Are you sure you want to add 'uda.cost.label' with a value of 'Стоимость'? (yes/no) yes
Config file ~/.taskrc modified.
```
Добавляем данные о стоимости в задачу:
``` bash
$ task 2 modify cost:10000
Modifying task 2 'Купить кабель ВВГ 3х2,5'.
Modified 1 task.
Project 'покупки' is 33% complete (2 of 3 tasks remaining).
```
И увидеть результат, в котором есть наша стоимость:
``` bash
$ task 2
No command specified - assuming 'information'.

Name                  Value                                               
ID                    2
Description           Купить кабель ВВГ 3х2,5                             
Status                Pending
Project               покупки                                             
This task is blocking 1 Срочно Брос
Entered               2024-06-15 07:57:18 (6h)                            
Last modified         2024-06-15 14:23:42 (44s)
Tags                  дача дом                                            
Virtual tags          BLOCKING PENDING READY TAGGED UDA UNBLOCKED PROJECT
UUID                  41aca2e4-def9-48e4-8342-9a65637649d0                
Urgency                9.9
Стоимость             10000                                               

    project       1 *    1 =      1
    blocking      1 *    8 =      8
    tags        0.9 *    1 =    0.9
                             ------
                                9.9

Date                Modification                                                       
2024-06-15 07:59:37 Description changed from 'Купить кабель ВВГ 3х2,5' to 'depends :1'.
2024-06-15 08:00:34 Description changed from 'depends :1' to 'Купить кабель ВВГ 3х2,5'.
2024-06-15 08:06:03 Project set to 'поку�
2024-06-15 09:40:56 Start set to '2024-06-15 09:40:56'.                          2024-06-15 10:57:12 Tags set to 'дача,�
2024-06-15 14:23:42 Cost set to '10000'.                                               
```

### Добавление атрибута в отчет
Для добавления атрибута в отчет начнем отталкиваться с стандартных настроек отчета, в качестве примера добавим нашу Стоимость в стандартный отчет **list**
Отображение текущих настроек отчета list
``` bash
$ task show list

Config Variable         Value                                                                                                                                           
list.all.projects       no
list.all.tags           no
report.list.columns     id,start.age,entry.age,depends.indicator,priority,project,tags,recur.indicator,scheduled.countdown,due,until.remaining,description.count,urgency
report.list.description Most details of tasks
report.list.filter      status:pending
report.list.labels      ID,Active,Age,D,P,Project,Tags,R,Sch,Due,Until,Description,Urg
report.list.sort        start-,due+,project+,urgency-
```

Добавим нужное поле в columns и labels
``` bash
$ task config report.list.columns     id,start.age,entry.age,depends.indicator,priority,project,tags,recur.indicator,scheduled.countdown,due,until.remaining,description.count,urgency,cost 
Are you sure you want to add 'report.list.columns' with a value of 'id,start.age,entry.age,depends.indicator,priority,project,tags,recur.indicator,scheduled.countdown,due,until.remaining,description.count,urgency,cost'? (yes/no) yes
Config file ~/.taskrc modified.

$ task config report.list.labels ID,Active,Age,D,P,Project,Tags,R,Sch,Due,Until,Description,Urg,Стоимость
Are you sure you want to add 'report.list.labels' with a value of 'ID,Active,Age,D,P,Project,Tags,R,Sch,Due,Until,Description,Urg,Стоимость'? (yes/no) yes
Config file ~/.taskrc modified.
```
Проверка результата
``` bash
$ task list

ID Age D Project Tags     Due        Description                 Urg  Стоимость
 1 6h  D ремонт  дом      2024-06-30 Срочно Бросить кабель       -0.8          
 2 6h    покупки дача дом            Купить кабель ВВГ 3х2,5      9.9     10000
 3 4h    покупки дача дом            Купить саморезы              1.9          

3 tasks

```

## Контекст
Для фильтрации задач на определенном контексте во время работы можно использовать контексты.

Создание нового контекста *дом*, для которого фильтром выступает тег *дом*
``` bash
$ task context define дом "+дом"
 ```
Переключение текущего контекста
``` bash
$ task context дом
Context 'дом' set. Use 'task context none' to remove.

$ task list

ID Age D Project Tags     Due        Description                 Urg  Стоимость
 1 6h  D ремонт  дом      2024-06-30 Срочно Бросить кабель       -0.8          
 2 6h    покупки дача дом            Купить кабель ВВГ 3х2,5      9.9     10000
 3 4h    покупки дача дом            Купить саморезы              1.9          

3 tasks
 ```

Снятие активного контекста - для отображения всех задач
``` bash
$ task context none
Context unset.
 ```


# Отчеты

## Список возможных отчетов
``` bash
$ task report

Report           Description                                       
active           Active tasks
all              All tasks                                         
blocked          Blocked tasks
blocking         Blocking tasks                                    
burndown.daily   Shows a graphical burndown chart, by day
burndown.monthly Shows a graphical burndown chart, by month        
burndown.weekly  Shows a graphical burndown chart, by week
completed        Completed tasks                                   
ghistory.annual  Shows a graphical report of task history, by year
ghistory.monthly Shows a graphical report of task history, by month
history.annual   Shows a report of task history, by year
history.monthly  Shows a report of task history, by month          
information      Shows all data and metadata
list             Most details of tasks                             
long             All details of tasks
ls               Few details of tasks                              
minimal          Minimal details of tasks
newest           Newest tasks                                      
next             Most urgent tasks
oldest           Oldest tasks                                      
overdue          Overdue tasks
projects         Shows all project names used                      
ready            Most urgent actionable tasks
recurring        Recurring Tasks                                   
summary          Shows a report of task status by project
tags             Shows a list of all tags used                     
unblocked        Unblocked tasks
waiting          Waiting (hidden) tasks                            

28 reports
```
### пример недельного отчета
``` bash
 $ task timesheet

2024-06-09 - 2024-06-15
  Completed (1 tasks)
    Project Due Description        
    покупки     Купить кабель-канал

  Started (0 tasks)
```

### Выполненные задачи
``` bash
$ task completed

ID UUID     Created    Completed  Age Project Description        
 - bec68c82 2024-06-15 2024-06-15 1h  покупки Купить кабель-канал

1 task
```


### Пример графического отчета
``` bash
task ghistory
```
![графический отчет](/taskwarrior/task_ghistory.png)

### Пример общего отчета
``` bash
$ task history

Year Month   Added Completed Deleted Net
2024 June        3         1       0   2
     Average     3         1       0   2
```

### Пример графического отчета по дням
``` bash
task burndown.daily
```
![графический отчет по дням](/taskwarrior/task_burn_daily.png)

### Создание собственного отчета
Для ускорения, а так-же демонстрации ручного изменения конфигурации не будем использовать task config, а сразу откроем ~/.taskrc в текстовом редакторе и будем добавлять необходимые данные в конец файла.
Пример создания отчета состоящего только из созданного ранее поля **cost**
```
# _____ CUSTOM_REPORTS_____
report.Costs.description=Траты в задачах
report.Costs.columns=cost
report.Costs.labels=Стоимость
```

Проверяем результат:
``` bash
$ task Costs

Стоимость
    10000

6 tasks
```

## Дополнительные команды
### Калькулятор
Да, он тут тоже есть
``` bash
$ task calc 2+3
5
```

### Календарь
Календарь подсвечивает все даты с запланированными задачами.
``` bash 
$ task calendar
```
![календарь](/taskwarrior/task_calendar.png)
Как видим по умолчанию недели начинаются с Воскресенья, для исправления необходимо добавить строку: **weekstart=monday** в файл **~/.taskrc**
![календарь исправленный](/taskwarrior/task_calendar_fixed.png)

### Экспорт задач
Для экспорта задач используется команда export.
``` bash
task export
[
{"id":1,"depends":"41aca2e4-def9-48e4-8342-9a65637649d0,bec68c82-2e6b-4405-9bfa-20be651c8d1b","description":"Бросить кабель","entry":"20240615T025635Z","modified":"20240615T030333Z","project":"ремонт","status":"pending","uuid":"585d5567-cf08-4a73-ab2c-e56c261e7ab3","urgency":-4},
{"id":2,"description":"Купить кабель-канал","entry":"20240615T025647Z","modified":"20240615T030603Z","project":"покупки","status":"pending","uuid":"bec68c82-2e6b-4405-9bfa-20be651c8d1b","urgency":9},
{"id":3,"description":"Купить кабель ВВГ 3х2,5","entry":"20240615T025718Z","modified":"20240615T030603Z","project":"покупки","status":"pending","uuid":"41aca2e4-def9-48e4-8342-9a65637649d0","urgency":9}
]

```

export по умолчанию выводит на stdout, поэтому вывод стоит перенаправлять сразу в желаемый файл.
``` bash
task export > ~/.task_backup.txt
```

### Список всех настроек и алиасов для команд
``` bash
task show
```

### Цвета
``` bash
task color
```
![пример цветового оформления](/taskwarrior/task_color.png)
У меня используется палитра solarized-light, настройки находятся в ~/.taskrc, там-же есть набор из предустановленных тем, достаточно просто раскоментировать интересующую из них.



## Bash alias
По желанию можно добавить alias-ы на наиболее частые команды или функции
```
alias ta="task add $1"
alias tl="task list"
alias ts="task start $1"
alias tt="task stop $1"
alias td="task done $1"
taskprojectfunction() {
	task $1 modify project:$2
}
alias t_p=taskprojectfunction
```
Таким образом можно создавать функции состоящие из набора заготовленных задач, при создании которых будут автоматически создаваться и необходимые подзадачи.

## В качестве резюме
Также стоит отметить, что taskwarrior может работать в качестве сервера, клиенты есть почти для всех платформ и на мобильных устройствах в том числе, что значительно расширяет возможности применения.

В качестве бонусных возможностей за рамками остались: создание собственных расцветок у полей в отчетах, добавление хуков к созданию/изменению задач, и много-много прочего, что крайне сумбурно собрано в официальной документации (местами еще более сумбурная, чем то, что я попытался собрать здесь).
