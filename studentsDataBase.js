console.log(`Student database plugin found!!!`);

const names = {
  1: 'ARJUN NAND A - 8F',
  2: 'ANURAG P - 8F',
  3: 'MUHAMMED NAJUWAN - 6B',
  4: 'MUHAMMED BISHR - 6D',
  5: 'SAYYID ZIYAN THANGAL KP - 6E',
  6: 'SAYYID MUHAMMED SHAMMAS KP - 6E',
  7: 'JASIL PV - 6D',
  8: 'MUHAMMED RABEEH PM - 6D',
  9: 'ASLAH K - 6D',
  10: 'ARSHAD - 7E',
  11: 'MUHAMMED HANAN PK - 9G',
  12: 'MUHAMMED ANAS C - 9G',
  13: 'AGNEY A - 9E',
  14: 'ARCHITH PRAKASH K - 9E',
  15: 'NIRANJAN A - 9D',
  16: 'HASEEF MUHAMMED PC - 9H',
  17: 'MUHAMMED SHAN - SIR',
  18: 'ANOOP VK - SIR',
  19: 'KRISHNA PRIYA VK - 6E',
  20: 'DHAYA THABASSUM - 6E',
  21: 'DRUPATH P - 6E',
  22: 'AROMAL P - 6E',
  23: 'MUHAMMED SHIFIN KP - 6E',
  24: 'MUHAMMED SHAMMAS C - 6D',
  25: 'ANSAH K - 6D',
  26: 'SALMAN FARIS - 6D',
  27: 'MUHAMMED RILAH KT - 6D',
  28: 'MUHAMMED RADIN K - 9G',
  29: 'MUHAMMED AMEEN T - 9G',
  30: 'AJAY K - 8F',
  31: 'ADISH P - 8A',
  32: 'HAFIS TP - 8H',
  33: 'ADISH C - 8A',
  34: 'NIVED K - 8F',
  35: 'MUHAMMED YASEEN KK - 8H',
  36: 'SANAMEHBIN CV - 6E',
  37: 'FATHIMA JASA TP - 5B',
  38: 'FATHIMA RIFA E - 5B',
  39: 'RIFA K - 5B',
  40: 'MISHHAL K - 6D',
  41: 'Developer',
  321: 'Case generator'
};

// Function to update student name based on roll number
function setupRollNoListener(rollInputId, nameOutputId) {
  const rollInput = document.getElementById(rollInputId);
  const nameOutput = document.getElementById(nameOutputId);

  if (rollInput && nameOutput) {
    rollInput.addEventListener('input', function () {
      const rollNumber = parseInt(this.value);
      nameOutput.value = names[rollNumber] || 'Name not found !!';
    });
  }
}

// Setup for both roll number inputs
setupRollNoListener('rollNo', 'studentName');
setupRollNoListener('rollNo2', 'studentName2');
