# doe-se

Criar uma plataforma para divulgar pessoas que precisam receber doações de sangue.

### Coisas que temos na cabeça:
- Lista de pessoas que precisam de doação de sangue. (Tipo um feed)
- Fórmulario pra saber se eu posso doar hoje.
- Reconhecimento aos doadores para instigar quem doou 
    - Poderiamos avisar quando uma pessoa que voce doou saiu do hospital
    - Mensagem bonitinha de agradecimento (de repente criada pela pessoa que precisava)
    - A pessoa que precisava manda um video pros outros.
    - Compilado de pessoas que foram salvas
- Alerta para quando eu posso doar denovo
- Filtro por localização 
- Notificar pessoas que podem doar para casos urgentes

Primeiro MVP:
- Fazer a lista de requerimentos funcionar.
- Backend:
    - CRUD de Requerimento
- Frontend:
    - Mostrar a lista de requirementos
    - Tela para detalhes de requerimento
    - Tela pra criar um requerimento
- Requerimento:
    - name - Nome completo
    - age - idade
    - blood_type - 'A', 'B', 'AB', 'O'
    - rh_factor - '+', '-'
    - hospital - Hospital em que a pessoa esá internada
    - blood_bank - Hiene, hemope
    - description
    - photo
