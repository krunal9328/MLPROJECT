import type { Stock } from '../types/stock';

const FASTAPI_URL = 'http://127.0.0.1:8000/api';

export const apiService = {
  // Fetch all stocks directly from Python FastAPI engine
  async getStocks(modelType: string = 'linear'): Promise<Stock[]> {
    try {
      const res = await fetch(`${FASTAPI_URL}/stocks?model_type=${modelType}`);
      if (res.ok) {
        const json = await res.json();
        if (json.data && Array.isArray(json.data)) {
          return json.data;
        }
      }
    } catch (err) {
      console.error('Error fetching stocks from FastAPI:', err);
    }
    return [];
  },

  // Toggle stock watchlist status directly via FastAPI
  async toggleWatchlist(stockId: string): Promise<boolean> {
    try {
      const res = await fetch(`${FASTAPI_URL}/watchlist/toggle`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ stockId }),
      });
      if (!res.ok) throw new Error('Watchlist toggle API error');
      const json = await res.json();
      return !!json.isSavedToWatchlist;
    } catch (err) {
      console.error('Error toggling watchlist via FastAPI:', err);
      return false;
    }
  },

  // Fetch Market Insights directly from FastAPI
  async getMarketInsights(modelType: string = 'linear') {
    try {
      const res = await fetch(`${FASTAPI_URL}/market-insights?model_type=${modelType}`);
      if (res.ok) {
        const json = await res.json();
        if (json.data) return json.data;
      }
    } catch (err) {
      console.error('Error fetching market insights from FastAPI:', err);
    }

    return {
      macroSummary: 'Market insights currently unavailable. Ensure Python FastAPI backend engine is running.',
      sectorHeatmap: [],
      deepDives: [],
    };
  },

  // Fetch AI Machine Learning Models directly from FastAPI
  async getModels() {
    try {
      const res = await fetch(`${FASTAPI_URL}/models`);
      if (res.ok) {
        const json = await res.json();
        if (json.data && Array.isArray(json.data)) {
          return json.data;
        }
      }
    } catch (err) {
      console.error('Error fetching AI models from FastAPI:', err);
    }
    return [];
  },

  // Trigger live ML prediction inference directly via FastAPI
  async runPrediction(stockId: string, modelId: string, timeframe: string) {
    try {
      const res = await fetch(`${FASTAPI_URL}/models/predict`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ stockId, modelId, timeframe }),
      });
      if (res.ok) {
        const json = await res.json();
        if (json.inference) return json.inference;
      }
    } catch (err) {
      console.error('Error running prediction via FastAPI:', err);
    }
    return null;
  },
};
