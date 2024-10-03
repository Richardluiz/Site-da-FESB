const atividades = document.querySelectorAll('.atividade a'); // Seleciona os links das atividades
const listaAtividades = document.getElementById('lista-atividades');
const finalizarButton = document.getElementById('finalizar');
const avisoFicha = document.getElementById('aviso-ficha');
let atividadesSelecionadas = [];

// ... (sua lógica para submenu e seta flutuante) ...

document.addEventListener('DOMContentLoaded', function () {

      const calendarEl = document.getElementById('calendario');

      // Define os eventos do calendário 
      const events = [
        {
          title: 'Cirurgia Espiritual',
          start: '2024-09-05T20:00:00', // Define o início e fim do evento "Cirurgia Espiritual"
          end: '2024-09-05T23:00:00' 
        },
        {
          title: 'Energização',
          start: '2024-09-04T20:00:00',
          end: '2024-09-04T23:00:00'
        },
        {
          title: 'Equilibrio dos Chakras',
          start: '2024-09-07T20:00:00',
          end: '2024-09-07T23:00:00'
        },
        {
          title: 'Reiki',
          start: '2024-09-02T20:00:00',
          end: '2024-09-02T23:00:00' 
        },
        {
          title: 'Quilopraxia',
          start: '2024-09-01T18:00:00',
          end: '2024-09-01T23:00:00' 
        }

        // Adicione os outros eventos da agenda aqui
      ];

      const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth', // Exibir a visualização mensal por padrão
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: events,
        eventClick: function (info) {
          const atividadeNome = info.event.title; // Obtém o título do evento

          // Verifica se o evento já está na lista
          const atividadeIndex = atividadesSelecionadas.indexOf(atividadeNome);
          if (atividadeIndex > -1) {
            atividadesSelecionadas.splice(atividadeIndex, 1);
            info.event.setProp('className', '');
            info.el.classList.remove('selecionado');
          } else {
            // Verifica se duas atividades já foram selecionadas
            if (atividadesSelecionadas.length < 2) {
              atividadesSelecionadas.push(atividadeNome);
              info.event.setProp('className', 'selecionado'); // Adiciona classe de seleção
              info.el.classList.add('selecionado');
            } else {
              alert("Você já selecionou duas atividades.");
              return; // Sai da função 
            }
          }

          atualizaCarrinho(); // Atualiza a lista e o botão "Finalizar"
        },
        datesSet: function () {
          // Recarrega as classes selecionadas
          atividadesSelecionadas.forEach(atividade => {
            // Seleciona os eventos na agenda que já foram escolhidos
            const eventsToSelect = calendar.getEvents().filter(event => event.title === atividade);
            eventsToSelect.forEach(event => {
              event.setProp('className', 'selecionado'); // Adiciona a classe 'selecionado' ao evento
            });
          });
        }
      });
      calendar.render();


      // ... Código das Atividades 

      // Cria evento para as atividades:
      atividades.forEach(atividade => {
        // Obtem o nome da atividade:
        const atividadeNome = atividade.dataset.atividade;

        // Adicionar evento de click à cada imagem da atividade: 
        atividade.addEventListener('click', function (event) {
          // Evite que o comportamento padrão do link aconteça: 
          event.preventDefault();

          // Clica em uma atividade existente
          if (atividadeNome === atividadeSelecionada.toLowerCase().replace(/ /g, '-')) {
            // Desmarque a atividade, caso o usuário clique novamente
            atividadeSelecionada = null;
            this.classList.remove('selecionada');

            // Se o evento já foi selecionado na agenda:
            const eventosNaAgenda = calendar.getEvents();
            const eventosSelecionados = eventosNaAgenda.filter(event => event.title === atividadeSelecionada);
            eventosSelecionados.forEach(event => {
              event.setProp('className', '');
              const element = calendar.getEventById(event.id);
              element.el.classList.remove('selecionado');
            });
          } else {
            // Verifique se o usuário já selecionou duas atividades:
            if (atividadesSelecionadas.length < 2) {
              atividadeSelecionada = atividadeNome;
              this.classList.add('selecionada');

              // Encontre o evento na agenda correspondente
              const eventoAgenda = calendar.getEvents().find(event => event.title === atividadeSelecionada);
              if (eventoAgenda) {
                eventoAgenda.setProp('className', 'selecionado');
                // Adicionar classes no FullCalendar (necessita recarregar):
                calendar.render();
              }
            } else {
              // Exibe um alerta quando o usuário tenta selecionar mais de duas atividades
              alert("Você já selecionou duas atividades.");
              return; // Sai da função
            }
          }
          atualizaCarrinho();
        });

      });

      function atualizaCarrinho() {
        // Limpa os elementos li da lista:
        listaAtividades.innerHTML = '';

        // Exibe as atividades selecionadas no carrinho:
        atividadesSelecionadas.forEach(atividade => {
          const li = document.createElement('li');
          li.textContent = atividade;
          listaAtividades.appendChild(li);
        });
        if (atividadesSelecionadas.length === 2) {
          finalizarButton.disabled = false;
          avisoFicha.style.display = 'none';
        } else {
          finalizarButton.disabled = true;
          avisoFicha.style.display = 'block';
        }
      }
      finalizarButton.addEventListener('click', function () {
        alert('Suas escolhas foram finalizadas com sucesso!');
        atividadesSelecionadas = [];
        atualizaCarrinho();
      });
    })

    document.addEventListener('DOMContentLoaded', function() {
      const submenus = document.querySelectorAll('.has-submenu');
    
      // Função para alternar a classe "open" no submenu
      function toggleSubmenu(submenu) {
        submenu.classList.toggle('open');
      }
    
      // Adiciona evento de clique para cada seta do submenu
      submenus.forEach(submenu => {
        const arrow = submenu.querySelector('.arrow-down');
    
        // Verifica se a seta foi encontrada
        if (arrow) {
          arrow.addEventListener('click', () => toggleSubmenu(submenu));
        }
      });
    });
    
    const setaFlutuante = document.querySelector('.seta-flutuante');
    const footer = document.querySelector('footer');
    
    setaFlutuante.addEventListener('click', function() {
      footer.classList.toggle('show');
    });