// Dados dos pets com informações detalhadas de localização e abrigo
const petsData = {
  "dalla": {
    name: "Dalla",
    type: "Cachorro",
    gender: "Fêmea",
    age: "4 anos",
    description: "Dócil e adora brincadeiras. Muito carinhosa.",
    image: "./assets/dalla.png",
    state: "Rio de Janeiro",
    city: "Rio de Janeiro",
    region: "Zona Sul",
    shelter: "Cantinho dos Focinhos",
    location: "rio-de-janeiro-zona-sul"
  },
  "luna": {
    name: "Luna",
    type: "Cachorro",
    gender: "Fêmea",
    age: "1 ano",
    description: "Fofa e independente. Gosta de atenção.",
    image: "./assets/luna.png",
    state: "Rio de Janeiro",
    city: "Rio de Janeiro",
    region: "Zona Sul",
    shelter: "Cantinho dos Focinhos",
    location: "rio-de-janeiro-zona-sul"
  },
  "toddy": {
    name: "Toddy",
    type: "Cachorro",
    gender: "Macho",
    age: "6 meses",
    description: "Muito brincalhão. Adora passeios e brincar com bolinhas.",
    image: "./assets/toddy.png",
    state: "Rio de Janeiro",
    city: "Rio de Janeiro",
    region: "Zona Norte",
    shelter: "Pata Amiga",
    location: "rio-de-janeiro-zona-norte"
  },
  "nina": {
    name: "Nina",
    type: "Cachorro",
    gender: "Fêmea",
    age: "8 meses",
    description: "Amigável e perfeita para famílias e crianças.",
    image: "./assets/nina.png",
    state: "Rio de Janeiro",
    city: "Rio de Janeiro",
    region: "Zona Oeste",
    shelter: "Casa das Patinhas",
    location: "rio-de-janeiro-zona-oeste"
  },
  "persa": {
    name: "Persa",
    type: "Cachorro",
    gender: "Macho",
    age: "4 meses",
    description: "Dócil e companheiro. Adora brincar e receber carinho.",
    image: "./assets/persa.png",
    state: "Rio de Janeiro",
    city: "Niterói",
    region: "Santa Rosa",
    shelter: "Patas do Bem",
    location: "niteroi-santa-rosa"
  },
  "mel": {
    name: "Mel",
    type: "Cachorro",
    gender: "Fêmea",
    age: "3 anos",
    description: "Dócil, amorosa e tranquila. Prefere ambientes calmos.",
    image: "./assets/mel.png",
    state: "Rio de Janeiro",
    city: "Niterói",
    region: "Região Oceânica",
    shelter: "Instituto Luz Animal",
    location: "niteroi-regiao-oceanica"
  },
  "max": {
    name: "Max",
    type: "Cachorro",
    gender: "Macho",
    age: "2 anos",
    description: "Amoroso e carente. Adora ficar abraçado.",
    image: "./assets/max.png",
    state: "Rio de Janeiro",
    city: "Nova Iguaçu",
    region: "Centro",
    shelter: "ONG Estrela Animal",
    location: "nova-iguacu-centro"
  },
  "thor": {
    name: "Thor",
    type: "Cachorro",
    gender: "Macho",
    age: "1 ano",
    description: "Muito amigável, adora crianças. Ativo e adora brincadeiras.",
    image: "./assets/thor.png",
    state: "Rio de Janeiro",
    city: "Nova Iguaçu",
    region: "Cabuçu",
    shelter: "ONG Patas do Amor",
    location: "nova-iguacu-cabucu"
  }
};

// Função para obter pets por localização
function getPetsByLocation(locationId) {
  return Object.entries(petsData)
    .filter(([key, pet]) => pet.location === locationId)
    .map(([key, pet]) => ({ ...pet, id: key }));
}

// Função para obter todas as localizações únicas
function getUniqueLocations() {
  const locations = new Map();
  
  Object.values(petsData).forEach(pet => {
    const locationKey = pet.location;
    if (!locations.has(locationKey)) {
      locations.set(locationKey, {
        id: locationKey,
        city: pet.city,
        region: pet.region,
        state: pet.state,
        displayName: `${pet.city} - ${pet.region}`
      });
    }
  });
  
  return Array.from(locations.values())
    .sort((a, b) => a.displayName.localeCompare(b.displayName));
}

// Função para obter informações de um pet específico
function getPetInfo(petId) {
  return petsData[petId] || null;
}

// Exportar para uso global
if (typeof window !== 'undefined') {
  window.petsData = petsData;
  window.getPetsByLocation = getPetsByLocation;
  window.getUniqueLocations = getUniqueLocations;
  window.getPetInfo = getPetInfo;
}
