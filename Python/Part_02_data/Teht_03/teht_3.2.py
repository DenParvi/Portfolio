import pandas as pd

# Путь к файлу
file_path = "Opinnäytetyökysely.xlsx"

# Загружаем данные
df = pd.read_excel(file_path, sheet_name="Kysely")

# Подсчитываем количество мужчин и женщин
total_counts = df["Sukupuoli"].value_counts()

# Создаём кросс-таблицу с относительными (процентными) значениями (нормализация по столбцам)
cross_tab = pd.crosstab(df["Opiskeluala"], df["Sukupuoli"], normalize="columns") * 100

# Округляем значения до 1 знака после запятой
cross_tab = cross_tab.round(1)

# Обновляем заголовки столбцов, добавляя количество (n = ...)
cross_tab.columns = [f"{col}, n = {total_counts[col]}" for col in cross_tab.columns]

# Выводим таблицу
print("\nRistiintaulukointi: Opiskeluala vs. Sukupuoli (%)\n")
print(cross_tab)


