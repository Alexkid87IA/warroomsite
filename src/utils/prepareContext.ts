import { DATA } from '../data/allData';

export function prepareCaseContext(): string {
  const context = `
# DOSSIER D'ARBITRAGE: ADN PRODUCTION vs COPYRIGHT CAPITAL

## RÉSUMÉ EXÉCUTIF
- Situation: ${DATA.summary.situation}
- Dette réclamée par CC: €${DATA.summary.debt.toLocaleString()}
- Contre-réclamation ADN: €${DATA.summary.counterClaim.min.toLocaleString()} - €${DATA.summary.counterClaim.max.toLocaleString()}
- Stratégie: ${DATA.summary.strategy}
- Position juridique: ${DATA.summary.position}

## PARTIES

### ADN Production SAS
- Type: ${DATA.parties.adn.type}
- SIREN: ${DATA.parties.adn.siren}
- Adresse: ${DATA.parties.adn.address}
- Équipe clé:
${DATA.parties.adn.team.map(m => `  - ${m.name} (${m.role}): ${m.email}`).join('\n')}

### Copyright Capital SA
- Type: ${DATA.parties.cc.type}
- Enregistrement: ${DATA.parties.cc.registration}
- Adresse: ${DATA.parties.cc.address}
- Équipe clé:
${DATA.parties.cc.team.map(m => `  - ${m.name} (${m.role}): ${m.email}${m.emailPerso ? ` | Personnel: ${m.emailPerso}` : ''}${m.note ? ` - ${m.note}` : ''}`).join('\n')}

## CONTRATS
${JSON.stringify(DATA.contracts, null, 2)}

## ACTIFS
${JSON.stringify(DATA.assets, null, 2)}

## CHRONOLOGIE DES ÉVÉNEMENTS
${JSON.stringify(DATA.timeline, null, 2)}

## NÉGLIGENCE GMAIL
${JSON.stringify(DATA.gmailNegligence, null, 2)}

## CLARIFICATION STRATÉGIQUE
${JSON.stringify(DATA.strategicClarification, null, 2)}
`;

  return context;
}
