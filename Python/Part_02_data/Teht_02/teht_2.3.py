import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Путь к файлу
file_path = "Opinnäytetyökysely.xlsx"

# Загружаем данные из листа "Kysely"
df = pd.read_excel(file_path, sheet_name="Kysely")

# Выбираем нужные столбцы
x_col = "Opinnäytetyön tekemisaika työviikkoina (40 h) aihekuvauksen tekemisestä työn valmistumiseen:työviikkoa"
y_col = "Thesis grade"  # Определим оценку как "Thesis grade", если в файле другое название, уточни!

# Удаляем строки, где нет оценки (как сказано в задании)
df_clean = df.dropna(subset=[y_col])

# Строим scatter plot
plt.figure(figsize=(8, 6))
sns.scatterplot(x=df_clean[x_col], y=df_clean[y_col])

# Настройки осей
plt.xlabel("Aika viikkoina")  # Время в неделях
plt.ylabel("Arvosana")  # Оценка
plt.title("Arvosanan riippuvuus tekoaajasta")  # Заголовок

# Показываем график
plt.show()
