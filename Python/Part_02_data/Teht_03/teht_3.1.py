import pandas as pd

# Путь к файлу
file_path = "Opinnäytetyökysely.xlsx"

# Загружаем данные из листа "Kysely"
df = pd.read_excel(file_path, sheet_name="Kysely")

# Создаём кросс-таблицу
cross_tab = pd.crosstab(df["Opiskeluala"], df["Sukupuoli"])

# Выводим таблицу в консоль
print("\nRistiintaulukointi: Opiskeluala vs. Sukupuoli\n")
print(cross_tab)


