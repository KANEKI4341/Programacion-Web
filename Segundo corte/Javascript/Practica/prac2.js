console.log("\n=== 4. Condiciones compuestas ===");

const tieneCuenta = true;
const saldo = 150000;
const montoRetiro = 200000;

if (tieneCuenta && saldo >= montoRetiro) {
  console.log("Retiro autorizado");
} else if (tieneCuenta && saldo < montoRetiro) {
  console.log("Fondos insuficientes");
} else {
  console.log("El usuario no tiene cuenta");
}

