import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";



const TokenModule = buildModule("HelloWorld", (m) => {

  const storageDapp = m.contract("HelloWorld");

  return { storageDapp };
});

export default TokenModule;
