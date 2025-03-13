import pandas as pd

# Путь к файлу
file_path = "Opinnäytetyökysely.xlsx"

# Загружаем данные
df = pd.read_excel(file_path, sheet_name="Kysely")

# Подсчитываем количество мужчин и женщин
total_counts = df["Sukupuoli"].value_counts()

# Фильтруем только "Кyllä" (1), удаляя "Ei" (0)
df = df[df["Oliko työ parityö?"] == 1]

# Создаём кросс-таблицу (оставляем только "Кyllä")
cross_tab = pd.crosstab(df["Sukupuoli"], df["Oliko työ parityö?"])

# Переименовываем столбец, чтобы не было чисел (1 → "Kyllä")
cross_tab.columns = ["Parityö"]

# Добавляем количество мужчин и женщин в заголовки строк
cross_tab.index = [f"{index}, n = {total_counts[index]}" for index in cross_tab.index]

# Выводим таблицу (правильный заголовок)
print("\nOliko työ parityö?\n")
print(cross_tab)

