// 1. Извлекаем нужные инструменты из глобального объекта Vue
const { createApp, ref, onMounted } = Vue;
createApp({
  setup() {
    // 2. Создаем реактивное состояние (переменные для экрана)
    const adviceId = ref('');
    const adviceText = ref('Loading your first advice...');
    const isLoading = ref(false);

    // 3. Асинхронная функция для похода в интернет за советом
    const fetchAdvice = async () => {
      // Включаем кручение кубика и блокируем кнопку
      isLoading.value = true;
      try {
        // Делаем реальный запрос к бесплатному API советов
        // Добавляем хвостик ?t=..., чтобы браузер не кэшировал ответы и всегда давал новую цитату
        const response = await fetch(`https://api.adviceslip.com/advice?t=${Date.now()}`);        
        // Превращаем сырой ответ в удобный JS-объект
        const data = await response.json();

        // Раскладываем полученные данные в наши реактивные переменные
        // Сервер возвращает объект в виде { slip: { id: 117, advice: "..." } }
        adviceId.value = data.slip.id;
        adviceText.value = data.slip.advice;
      } catch (error) {
        // Если вдруг пропал интернет или упал сервер — выводим ошибку на экран
        adviceId.value = 'ERROR';
        adviceText.value = 'Oops! Something went wrong. Check your internet connection.';
        console.error('Ошибка при получении данных:', error);
      } finally {
        // Этот блок выполнится в любом случае (успех или ошибка)
        // Выключаем анимацию кручения кубика, разблокируем кнопку
        isLoading.value = false;
      }
    };
    // 4. Жизненный цикл Vue: запускаем fetchAdvice автоматически при загрузке страницы
    onMounted(() => {
      fetchAdvice();
    });
    // 5. Обязательно возвращаем всё наружу, чтобы HTML-разметка увидела эти данные
    return {
      adviceId,
      adviceText,
      isLoading,
      fetchAdvice
    };
  }
}).mount('#app'); // Привязываем наше Vue-приложение к тегу <main id="app">

