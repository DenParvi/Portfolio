import pandas as pd

# Путь к файлу
file_path = "Opinnäytetyökysely.xlsx"

# Загружаем данные
df = pd.read_excel(file_path, sheet_name="Kysely")

# 1. Pivot-таблица для "Sain riittävästi ohjausta"
pivot_1 = df.pivot_table(
    index="Opiskeluala", 
    columns="Sukupuoli", 
    values="Sain riittävästi ohjausta", 
    aggfunc="mean"
)

# Добавляем "Kaikki" (среднее по всем в столбцах)
pivot_1["Kaikki"] = pivot_1.mean(axis=1)

# Добавляем строку "Kaikki" (среднее по всем строкам)
pivot_1.loc["Kaikki"] = pivot_1.mean(axis=0)

# 2. Pivot-таблица для двух переменных (без строки "Kaikki")
pivot_2 = df.pivot_table(
    index="Opiskeluala", 
    columns="Sukupuoli", 
    values=["Luotin ohjaajani neuvoihin", "Ohjaajaani oli helppo lähestyä"], 
    aggfunc="mean"
)

# Вывод таблиц в консоль
print("\nPivot-taulukko 1: Sain riittävästi ohjausta\n")
print(pivot_1.round(1))

print("\nPivot-taulukko 2: Ohjaajaani oli helppo lähestyä & Luotin ohjaajani neuvoihin\n")
print(pivot_2.round(1))

