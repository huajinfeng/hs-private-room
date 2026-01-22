# 15 Python日期时间
## Python *datetime*
Python有一个 _datetime_ 模块用于处理日期和时间。
```py
import datetime
print(dir(datetime))
['MAXYEAR', 'MINYEAR', '__builtins__', '__cached__', '__doc__', '__file__', '__loader__', '__name__', '__package__', '__spec__', 'date', 'datetime', 'datetime_CAPI', 'sys', 'time', 'timedelta', 'timezone', 'tzinfo']
```
通过dir或help内置命令，可以了解特定模块中可用的函数。如你所见，datetime模块中有许多函数，但我们将重点关注 _date_、_datetime_、_time_ 和 _timedelta_。让我们一个一个地看。
### 获取 *datetime* 信息
```py
from datetime import datetime
now = datetime.now()
print(now)                      # 2021-07-08 07:34:46.549883
day = now.day                   # 8
month = now.month               # 7
year = now.year                 # 2021
hour = now.hour                 # 7
minute = now.minute             # 38
second = now.second
timestamp = now.timestamp()
print(day, month, year, hour, minute)
print('timestamp', timestamp)
print(f'{day}/{month}/{year}, {hour}:{minute}')  # 8/7/2021, 7:38
```
时间戳或Unix时间戳是从1970年1月1日UTC开始经过的秒数。
### 使用 *strftime* 格式化日期输出
```py
from datetime import datetime
new_year = datetime(2020, 1, 1)
print(new_year)      # 2020-01-01 00:00:00
day = new_year.day
month = new_year.month
year = new_year.year
hour = new_year.hour
minute = new_year.minute
second = new_year.second
print(day, month, year, hour, minute) #1 1 2020 0 0
print(f'{day}/{month}/{year}, {hour}:{minute}')  # 1/1/2020, 0:0

```

使用 *strftime* 方法格式化日期时间，相关文档可以在[这里](https://strftime.org/)找到。
```py
from datetime import datetime
# 当前日期和时间
now = datetime.now()
t = now.strftime("%H:%M:%S")
print("时间:", t)
time_one = now.strftime("%m/%d/%Y, %H:%M:%S")
# mm/dd/YY H:M:S 格式
print("时间一:", time_one)
time_two = now.strftime("%d/%m/%Y, %H:%M:%S")
# dd/mm/YY H:M:S 格式
print("时间二:", time_two)
```
```sh
时间: 01:05:01
时间一: 12/05/2019, 01:05:01
时间二: 05/12/2019, 01:05:01
```
以下是我们用来格式化时间的所有 _strftime_ 符号。这个模块的所有格式示例。

![strftime](../pythonImages/strftime.png)

### 使用 *strptime* 将字符串转换为时间
这里有一个[文档](https://www.programiz.com/python-programming/datetime/strptimet)，有助于理解格式。

```py
from datetime import datetime
date_string = "5 December, 2019"
print("date_string =", date_string)
date_object = datetime.strptime(date_string, "%d %B, %Y")
print("date_object =", date_object) #date_object = 2019-12-05 00:00:00
```

### 从 *datetime* 使用 *date*

```py
from datetime import date
d = date(2020, 1, 1)
print(d)
print('当前日期:', d.today())
# 今天的日期对象
today = date.today()
print("当前年份:", today.year)
print("当前月份:", today.month)
print("当前日:", today.day)
```

### 使用Time对象表示时间
```py
from datetime import time
# time(hour = 0, minute = 0, second = 0)
a = time()
print("a =", a) # a = 00:00:00
# time(hour, minute 和 second)
b = time(10, 30, 50) # b = 10:30:50
print("b =", b)
c = time(hour=10, minute=30, second=50)
print("c =", c) # c = 10:30:50
# time(hour, minute, second, microsecond)
d = time(10, 30, 50, 200555)
print("d =", d) # d = 10:30:50.200555
```

### 计算两个时间点之间的差异
```py
from datetime import date, datetime
today = date(year=2019, month=12, day=5)
new_year = date(year=2020, month=1, day=1)
time_left_for_newyear = new_year - today
# 距离新年的时间：  27 days, 0:00:00
print('距离新年的时间: ', time_left_for_newyear)

t1 = datetime(year = 2019, month = 12, day = 5, hour = 0, minute = 59, second = 0)
t2 = datetime(year = 2020, month = 1, day = 1, hour = 0, minute = 0, second = 0)
diff = t2 - t1
print('距离新年的时间:', diff) # 距离新年的时间: 26 days, 23: 01: 00
```

### 使用 *timedelta* 计算两个时间点之间的差异

```py
from datetime import timedelta
t1 = timedelta(weeks=12, days=10, hours=4, seconds=20)
t2 = timedelta(days=7, hours=5, minutes=3, seconds=30)
t3 = t1 - t2
print("t3 =", t3) # t3 = 86 days, 22:56:50
```