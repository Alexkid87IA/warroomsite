# Configuration de Claude AI pour votre War Room

## Vue d'ensemble

Votre application dispose maintenant d'un assistant IA intégré qui a accès à **toutes les données de votre dossier** d'arbitrage contre Copyright Capital. Claude peut analyser, conseiller, et même rédiger des documents basés sur l'intégralité du contexte de l'affaire.

## Accès

L'interface Intelligence AI est accessible via le menu de navigation principal, juste après le Dashboard. Vous verrez l'icône ✨ "Intelligence AI".

## Configuration de la clé API

Pour utiliser Claude, vous devez configurer votre clé API Anthropic:

### 1. Obtenir votre clé API Anthropic

1. Créez un compte sur [Anthropic Console](https://console.anthropic.com/)
2. Accédez à la section **API Keys**
3. Créez une nouvelle clé API (ou utilisez une existante)
4. Copiez la clé (format: `sk-ant-...`)

### 2. Configurer la clé dans Supabase

La clé API doit être stockée comme secret d'environnement dans Supabase:

**Option A: Via Supabase Dashboard**
1. Accédez à votre projet Supabase Dashboard
2. Allez dans **Settings** → **Edge Functions**
3. Ajoutez un nouveau secret:
   - Name: `ANTHROPIC_API_KEY`
   - Value: Votre clé API (ex: `sk-ant-api03-...`)

**Option B: Via Supabase CLI** (si vous l'avez installé)
```bash
supabase secrets set ANTHROPIC_API_KEY=votre_clé_api_ici
```

### 3. Redémarrer la fonction Edge (si nécessaire)

Les secrets sont généralement pris en compte immédiatement, mais si vous rencontrez des problèmes, vous pouvez redéployer la fonction via le Dashboard ou en attendant quelques minutes.

## Utilisation

### Ce que Claude peut faire pour vous:

1. **Analyse juridique**
   - "Quelles sont mes meilleures arguments juridiques?"
   - "Analyse les faiblesses de la position de CC"
   - "Calcule mes chances de succès à l'arbitrage"

2. **Analyse stratégique**
   - "Quelle devrait être ma prochaine action?"
   - "Comment répondre à leur dernière lettre?"
   - "Quelle stratégie de négociation recommandes-tu?"

3. **Recherche dans le dossier**
   - "Résume-moi la chronologie des événements"
   - "Quand CC a-t-il pris le contrôle exclusif de la page?"
   - "Quelles preuves ai-je de leur négligence?"

4. **Rédaction de documents**
   - "Rédige une réponse à leur email du 14 novembre"
   - "Prépare un argumentaire pour l'arbitrage"
   - "Écris une note de stratégie pour mon avocat"

5. **Analyse psychologique**
   - "Analyse le profil psychologique de Jonathan Mayorkas"
   - "Comment interpréter leur communication récente?"
   - "Quels sont leurs points de pression?"

### Contexte fourni à Claude:

Claude a accès en temps réel à:
- ✅ Résumé exécutif de l'affaire
- ✅ Informations sur toutes les parties (ADN, CC, Meta)
- ✅ Tous les contrats et leurs clauses
- ✅ Liste complète des actifs et revenus
- ✅ Chronologie détaillée des événements
- ✅ Analyse de la négligence Gmail/2FA
- ✅ Votre stratégie "Art of War"
- ✅ Toutes les preuves et documents

## Coûts

### Tarification Anthropic (modèle Claude 3.5 Sonnet):
- **Input**: ~$3 par million de tokens
- **Output**: ~$15 par million de tokens

### Estimation pour votre usage:
- Votre dossier complet ≈ 50-100k tokens
- Une question + réponse ≈ 55-105k tokens total
- **Coût par conversation**: ~$0.50 - $2.00
- **Budget mensuel recommandé**: $20-50 pour usage intensif

### Optimisation des coûts:
- Le contexte est envoyé à chaque message (nécessaire pour la cohérence)
- Les conversations longues coûtent plus cher
- Pour les questions simples, soyez direct et concis
- Pour les analyses longues, c'est justifié

## Sécurité et confidentialité

### Données envoyées:
- ✅ Toutes les données de votre dossier sont envoyées à Anthropic
- ✅ Anthropic (USA) héberge les serveurs
- ✅ Les conversations ne sont PAS utilisées pour entraîner les modèles (API)
- ✅ Vous gardez le contrôle de ce qui est partagé

### Protection:
- ✅ Clé API sécurisée côté serveur (Edge Function)
- ✅ Authentification requise pour utiliser la fonction
- ✅ Pas de logs des conversations dans votre base de données (par défaut)

## Dépannage

### "ANTHROPIC_API_KEY not configured"
→ Votre clé API n'est pas configurée dans Supabase. Suivez les étapes ci-dessus.

### "Erreur lors de la communication avec Claude"
→ Vérifiez que:
1. Votre clé API est valide
2. Vous avez des crédits sur votre compte Anthropic
3. Votre connexion internet fonctionne

### Les réponses sont lentes
→ C'est normal! Claude analyse ~50-100k tokens à chaque fois. Comptez 10-30 secondes par réponse.

## Support

Pour toute question technique:
- Documentation Anthropic: https://docs.anthropic.com/
- Documentation Supabase Edge Functions: https://supabase.com/docs/guides/functions

---

**Prêt à utiliser l'Intelligence AI?** Configurez votre clé API et commencez à poser vos questions stratégiques! 🚀
