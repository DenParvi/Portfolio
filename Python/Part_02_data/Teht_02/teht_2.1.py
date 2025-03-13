import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Путь к файлу
file_path = "Opinnäytetyökysely.xlsx"

# Загружаем данные из листа "Kysely"
df = pd.read_excel(file_path, sheet_name="Kysely")

# Выбираем нужный столбец
column_name = "Sain riittävästi ohjausta"
data = df[column_name].dropna()  # Убираем пропущенные значения

# Строим гистограмму
plt.figure(figsize=(8, 6))
ax = sns.histplot(data, bins=5, kde=False)  # Гистограмма с 5 столбцами

# Центрируем значения на оси X
bin_centers = [patch.get_x() + patch.get_width() / 2 for patch in ax.patches]
plt.xticks(bin_centers, labels=[int(x) for x in bin_centers])

# Настройки осей
plt.xlabel("Sain riittävästi ohjausta")
plt.ylabel("Count")
plt.title("Histogrammi: Sain riittävästi ohjausta")

# Показываем график
plt.show()
