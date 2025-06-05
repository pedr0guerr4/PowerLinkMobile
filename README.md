# 📱 PowerNow

Aplicativo mobile desenvolvido em **React Native + Expo**, parte da solução integrada **EnergIA**, para registrar quedas de energia, relatar prejuízos e acessar orientações úteis durante apagões.

---

## 🚀 Funcionalidades

- Registro de **apagões** (CEP, bairro, cidade)
- Entrada de **tempo de interrupção**
- Registro de **prejuízos observados**
- Exibição de **recomendações** e boas práticas
- Armazenamento **offline** com `AsyncStorage`

---

## 📁 Estrutura

```
PowerNowMobile/
├── screens/
│   ├── Panorama.js
│   ├── Localizacao.js
│   ├── Tempo.js
│   ├── Prejuizos.js
│   └── Recomendacoes.js
├── App.js
├── package.json
└── ...
```

---

## ⚙️ Requisitos

- [Node.js 18+](https://nodejs.org/en)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- App [Expo Go](https://expo.dev/client) instalado no celular (ou use emulador Android/iOS)

---

## 🧠 Tecnologias utilizadas

| Tecnologia     | Uso                           |
|----------------|--------------------------------|
| React Native   | Framework mobile               |
| Expo           | Execução e build simplificado  |
| AsyncStorage   | Armazenamento local offline    |
| React Navigation | Navegação entre telas       |
