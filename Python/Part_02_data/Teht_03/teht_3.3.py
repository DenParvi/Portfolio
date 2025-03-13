import pandas as pd

# Путь к файлу
file_path = "Opinnäytetyökysely.xlsx"

# Загружаем данные
df = pd.read_excel(file_path, sheet_name="Kysely")

# Создаём кросс-таблицу с нормализацией по строкам
cross_tab = pd.crosstab(df["Sukupuoli"], df["Opiskeluala"], normalize="index") * 100

# Округляем значения до 1 знака после запятой
cross_tab = cross_tab.round(1)

# Добавляем строку с количеством мужчин и женщин
total_counts = df["Sukupuoli"].value_counts()
for gender in total_counts.index:
    cross_tab.loc[f"{gender}, n = {total_counts[gender]}"] = cross_tab.loc[gender]
    cross_tab.drop(index=gender, inplace=True)  # Удаляем старую строку

# Выводим таблицу
print("\nRistiintaulukointi 3: Opiskeluala vs. Sukupuoli (%)\n")
print(cross_tab)


