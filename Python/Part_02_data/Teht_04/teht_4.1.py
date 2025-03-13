import pandas as pd

# Путь к файлу
file_path = "Opinnäytetyökysely.xlsx"

# Загружаем данные
df = pd.read_excel(file_path, sheet_name="Kysely")

# Выбираем нужную переменную
time_col = "Opinnäytetyön tekemiseen kulunut aika ensimmäisistä aihekaavailuista työn valmistumiseen:kuukautta"

# Удаляем строки, где нет данных о времени выполнения
df_clean = df.dropna(subset=[time_col])

# Функция для расчёта статистики
def calculate_statistics(df, group_col):
    stats = df.groupby(group_col)[time_col].agg([
        ('Lukumäärä', 'count'),
        ('Keskiarvo', 'mean'),
        ('Keski­hajonta', 'std'),
        ('Pienin', 'min'),
        ('Alaneljännes', lambda x: x.quantile(0.25)),
        ('Mediaani', 'median'),
        ('Ylä­neljännes', lambda x: x.quantile(0.75)),
        ('Suurin', 'max')
    ])
    return stats.round(1)  # Округляем до 1 знака после запятой

# 1. Статистика по Opiskeluala
stats_opiskeluala = calculate_statistics(df_clean, "Opiskeluala")
print("\nTilastot Opiskeluala:\n", stats_opiskeluala)

# 2. Статистика по Sukupuoli
stats_sukupuoli = calculate_statistics(df_clean, "Sukupuoli")
print("\nTilastot Sukupuoli:\n", stats_sukupuoli)

