import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Путь к файлу
file_path = "Opinnäytetyökysely.xlsx"

# Загружаем данные из листа "Kysely"
df = pd.read_excel(file_path, sheet_name="Kysely")

# Выбираем нужные столбцы
x_col = "Pystyin itse vaikuttamaan opinnäytetyöni ohjaajan valintaan"
y_col = "Sain riittävästi ohjausta"

# Убираем пропущенные значения
df_clean = df[[x_col, y_col]].dropna()

# Строим scatter plot
plt.figure(figsize=(8, 6))
sns.scatterplot(x=df_clean[x_col], y=df_clean[y_col])

# Настройки осей
plt.xlabel(x_col)
plt.ylabel(y_col)
plt.title("Scatter plot: Vaikutus ohjaajan valintaan vs. Riittävä ohjaus")

# Показываем график
plt.show()
