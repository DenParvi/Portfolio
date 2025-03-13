import pandas as pd

# Путь к файлу
file_path = "C:\\D\\Suomi\\01_Tradenomi\\16_Python_Data\\Teht_1\\Opinnäytetyökysely.xlsx"

# Загружаем данные из листа "Kysely"
df = pd.read_excel(file_path, sheet_name="Kysely")

# Функция для создания частотной таблицы в правильном формате
def create_frequency_table(df, column_name):
    freq = df[column_name].value_counts().reset_index()
    freq.columns = [column_name, 'f']
    freq['%'] = (freq['f'] / freq['f'].sum() * 100).round(1).astype(str) + " %"

    # Добавляем строку "Yhteensä" (Всего)
    total_row = pd.DataFrame({column_name: ['Yhteensä'], 'f': [freq['f'].sum()], '%': ['100.0 %']})
    freq = pd.concat([freq, total_row], ignore_index=True)

    # Перемещаем колонку с названиями категорий в индекс (как на картинке)
    freq = freq.set_index(column_name)

    return freq

# Список столбцов для анализа
columns_to_analyze = [
    "Kuinka löysit aiheesi?",
    "Opiskeluala",
    "Oliko työ parityö?",
    "Oliko työsi teoreettinen vai käytännöllinen? Teoreettinen (1) - Käytännöllinen (5)"
]

# Генерируем таблицы и просто выводим их в консоль (без сохранения в файл)
for col in columns_to_analyze:
    freq_table = create_frequency_table(df, col)

    # Выводим в консоль
    print(f"\nFrekvenssitaulukko: {col}")
    print(freq_table)
