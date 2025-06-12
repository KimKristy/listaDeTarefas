//DECLARAÇÃO DE VARIAVEIS
let tarefa = [];

//FUNÇÃO DE VALIDAÇÃO

const validarCampo = () => {
  let valida = false;
  if (document.getElementById("task").value == "") valida = true;
  return valida;
};

//FUNÇÃO ADICIONAR TAREFA

function adicionarTarefa() {
  let linha = document.getElementById("task");

  if (validarCampo()) {
    //alert("Preencha o campo Tarefa")
    Swal.fire({
      icon: "warning",
      title: "Atenção",
      text: "Preencha o campo Tarefa",
      confirmButtonColor: "#0D2C4AFF",
      confirmButtonText: "Ok",
    });
  } else {
    tarefa.push(linha.value);
    linha.value = "";
    listarTarefas();
    Swal.fire({
      icon: "success",
      title: "Tarefa adicionada com sucesso",
      text: "Preencha o campo Tarefa",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}

//FUNÇÃO LISTAR TAREFAS

function listarTarefas() {
  let valor = "";
  for (let i = 0; i < tarefa.length; i++) {
    valor += tarefa[i] + "<br>";
  }
  document.getElementById("lista").innerHTML = valor;
}

//FUNÇÃO REMOVER TAREFA

function removerTarefa() {
  Swal.fire({
    icon: "warning",
    title: "Tem certeza que deseja Apagar?",
    text: "Essa Tarefa Sera Apagada",
    showCancelButton: true,
    confirmButtonColor: "#6B095BFF",
    confirmButtonText: "Sim, Remover",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      tarefa.pop(); //REMOVE O ULTIMO ITEM ADICIONADO
      listarTarefas();
      Swal.fire("Apagado", "A tarefa foi removida da lista", "success");
    }
  });
}
