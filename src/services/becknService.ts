// Beckn Protocol Service for Decentralized Discovery and Transactions
import { blockchainService } from './blockchainService';

export interface BecknContext {
  domain: string;
  country: string;
  city: string;
  action: string;
  core_version: string;
  bap_id: string;
  bap_uri: string;
  bpp_id?: string;
  bpp_uri?: string;
  transaction_id: string;
  message_id: string;
  timestamp: string;
}

export interface BecknProvider {
  id: string;
  descriptor: {
    name: string;
    code: string;
    symbol: string;
    short_desc: string;
    long_desc: string;
    images: string[];
  };
  categories: BecknCategory[];
  locations: BecknLocation[];
  items: BecknItem[];
  fulfillments: BecknFulfillment[];
  payments: BecknPayment[];
}

export interface BecknCategory {
  id: string;
  descriptor: {
    name: string;
    code: string;
  };
  tags: { [key: string]: string };
}

export interface BecknLocation {
  id: string;
  descriptor: {
    name: string;
    code: string;
  };
  gps: string;
  address: {
    locality: string;
    street: string;
    city: string;
    area_code: string;
    state: string;
    country: string;
  };
}

export interface BecknItem {
  id: string;
  parent_item_id?: string;
  descriptor: {
    name: string;
    code: string;
    symbol: string;
    short_desc: string;
    long_desc: string;
    images: string[];
  };
  price: {
    currency: string;
    value: string;
    estimated_value?: string;
    computed_value?: string;
    listed_value?: string;
    offered_value?: string;
    minimum_value?: string;
    maximum_value?: string;
  };
  category_id: string;
  fulfillment_id: string;
  location_id: string;
  time: {
    label: string;
    range: {
      start: string;
      end: string;
    };
  };
  matched: boolean;
  related: boolean;
  recommended: boolean;
  tags: { [key: string]: string };
}

export interface BecknFulfillment {
  id: string;
  type: string;
  provider_id: string;
  rating: number;
  state: {
    descriptor: {
      name: string;
      code: string;
    };
    updated_at: string;
    updated_by: string;
  };
  tracking: boolean;
  customer: {
    person: {
      name: string;
      image: string;
      dob: string;
      gender: string;
      cred: string;
      tags: { [key: string]: string };
    };
    contact: {
      phone: string;
      email: string;
    };
  };
  agent: {
    name: string;
    image: string;
    dob: string;
    gender: string;
    cred: string;
    tags: { [key: string]: string };
    phone: string;
    email: string;
  };
  vehicle: {
    category: string;
    capacity: number;
    make: string;
    model: string;
    size: string;
    variant: string;
    color: string;
    energy_type: string;
    registration: string;
  };
  start: {
    location: BecknLocation;
    time: {
      range: {
        start: string;
        end: string;
      };
    };
    instructions: {
      name: string;
      code: string;
      symbol: string;
      short_desc: string;
      long_desc: string;
    };
    contact: {
      phone: string;
      email: string;
    };
  };
  end: {
    location: BecknLocation;
    time: {
      range: {
        start: string;
        end: string;
      };
    };
    instructions: {
      name: string;
      code: string;
      symbol: string;
      short_desc: string;
      long_desc: string;
    };
    contact: {
      phone: string;
      email: string;
    };
  };
  rateable: boolean;
  tags: { [key: string]: string };
}

export interface BecknPayment {
  uri: string;
  tl_method: string;
  params: {
    currency: string;
    transaction_id: string;
    amount: string;
  };
  type: string;
  status: string;
  time: {
    label: string;
    range: {
      start: string;
      end: string;
    };
  };
  tags: { [key: string]: string };
}

export interface BecknOrder {
  id: string;
  state: string;
  provider: {
    id: string;
    locations: BecknLocation[];
  };
  items: BecknItem[];
  billing: {
    name: string;
    address: {
      locality: string;
      street: string;
      city: string;
      area_code: string;
      state: string;
      country: string;
    };
    email: string;
    phone: string;
    time: {
      timestamp: string;
    };
    tax_number: string;
    created_at: string;
    updated_at: string;
  };
  fulfillment: BecknFulfillment;
  quote: {
    price: {
      currency: string;
      value: string;
    };
    breakup: Array<{
      title: string;
      price: {
        currency: string;
        value: string;
      };
    }>;
    ttl: string;
  };
  payment: BecknPayment;
  created_at: string;
  updated_at: string;
}

class BecknProtocolService {
  private baseUrl: string;
  private context: BecknContext;

  constructor() {
    this.baseUrl = process.env.VITE_BECKN_GATEWAY_URL || 'https://beckn-gateway.villagestay.com';
    this.context = {
      domain: 'rural-tourism',
      country: 'IND',
      city: 'std:080',
      action: '',
      core_version: '1.2.0',
      bap_id: 'villagestay.com',
      bap_uri: 'https://villagestay.com/beckn',
      transaction_id: '',
      message_id: '',
      timestamp: ''
    };
  }

  private generateContext(action: string): BecknContext {
    return {
      ...this.context,
      action,
      transaction_id: this.generateUUID(),
      message_id: this.generateUUID(),
      timestamp: new Date().toISOString()
    };
  }

  private generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  // Search for rural tourism providers
  async search(intent: {
    category?: string;
    location?: string;
    dateRange?: { start: string; end: string };
    guests?: number;
    priceRange?: { min: number; max: number };
  }): Promise<BecknProvider[]> {
    const context = this.generateContext('search');
    
    const searchPayload = {
      context,
      message: {
        intent: {
          category: {
            descriptor: {
              name: intent.category || 'rural-tourism'
            }
          },
          location: intent.location ? {
            gps: intent.location
          } : undefined,
          time: intent.dateRange ? {
            range: {
              start: intent.dateRange.start,
              end: intent.dateRange.end
            }
          } : undefined,
          item: {
            quantity: {
              count: intent.guests || 1
            }
          },
          payment: intent.priceRange ? {
            params: {
              amount: `${intent.priceRange.min}-${intent.priceRange.max}`,
              currency: 'INR'
            }
          } : undefined
        }
      }
    };

    try {
      const response = await fetch(`${this.baseUrl}/search`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.VITE_BECKN_API_KEY}`
        },
        body: JSON.stringify(searchPayload)
      });

      const data = await response.json();
      return this.parseSearchResponse(data);
    } catch (error) {
      console.error('Beckn search error:', error);
      return [];
    }
  }

  // Select items from a provider
  async select(providerId: string, items: string[]): Promise<BecknOrder | null> {
    const context = this.generateContext('select');
    
    const selectPayload = {
      context,
      message: {
        order: {
          provider: {
            id: providerId
          },
          items: items.map(itemId => ({ id: itemId }))
        }
      }
    };

    try {
      const response = await fetch(`${this.baseUrl}/select`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.VITE_BECKN_API_KEY}`
        },
        body: JSON.stringify(selectPayload)
      });

      const data = await response.json();
      return this.parseOrderResponse(data);
    } catch (error) {
      console.error('Beckn select error:', error);
      return null;
    }
  }

  // Initialize order
  async init(order: Partial<BecknOrder>): Promise<BecknOrder | null> {
    const context = this.generateContext('init');
    
    const initPayload = {
      context,
      message: {
        order
      }
    };

    try {
      const response = await fetch(`${this.baseUrl}/init`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.VITE_BECKN_API_KEY}`
        },
        body: JSON.stringify(initPayload)
      });

      const data = await response.json();
      return this.parseOrderResponse(data);
    } catch (error) {
      console.error('Beckn init error:', error);
      return null;
    }
  }

  // Confirm order
  async confirm(order: BecknOrder): Promise<BecknOrder | null> {
    const context = this.generateContext('confirm');
    
    // Store order on blockchain before confirmation
    const blockchainHash = await blockchainService.storePaymentTransaction({
      id: order.id,
      amount: parseFloat(order.quote.price.value),
      currency: 'INR',
      fromAddress: order.billing.email,
      toAddress: order.provider.id,
      stakeholderDistribution: order.quote.breakup.map(item => ({
        stakeholderId: item.title,
        amount: parseFloat(item.price.value),
        walletAddress: `wallet_${item.title.toLowerCase().replace(/\s+/g, '_')}`
      })),
      timestamp: Date.now(),
      confirmations: 0,
      transactionFee: parseFloat(order.quote.price.value) * 0.01
    });

    const confirmPayload = {
      context,
      message: {
        order: {
          ...order,
          blockchain_hash: blockchainHash
        }
      }
    };

    try {
      const response = await fetch(`${this.baseUrl}/confirm`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.VITE_BECKN_API_KEY}`
        },
        body: JSON.stringify(confirmPayload)
      });

      const data = await response.json();
      return this.parseOrderResponse(data);
    } catch (error) {
      console.error('Beckn confirm error:', error);
      return null;
    }
  }

  // Track order status
  async track(orderId: string): Promise<BecknOrder | null> {
    const context = this.generateContext('track');
    
    const trackPayload = {
      context,
      message: {
        order_id: orderId
      }
    };

    try {
      const response = await fetch(`${this.baseUrl}/track`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.VITE_BECKN_API_KEY}`
        },
        body: JSON.stringify(trackPayload)
      });

      const data = await response.json();
      return this.parseOrderResponse(data);
    } catch (error) {
      console.error('Beckn track error:', error);
      return null;
    }
  }

  // Cancel order
  async cancel(orderId: string, reason: string): Promise<BecknOrder | null> {
    const context = this.generateContext('cancel');
    
    const cancelPayload = {
      context,
      message: {
        order_id: orderId,
        cancellation_reason_id: reason
      }
    };

    try {
      const response = await fetch(`${this.baseUrl}/cancel`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.VITE_BECKN_API_KEY}`
        },
        body: JSON.stringify(cancelPayload)
      });

      const data = await response.json();
      return this.parseOrderResponse(data);
    } catch (error) {
      console.error('Beckn cancel error:', error);
      return null;
    }
  }

  // Support request
  async support(orderId: string, issue: string): Promise<any> {
    const context = this.generateContext('support');
    
    const supportPayload = {
      context,
      message: {
        support: {
          order_id: orderId,
          issue_type: issue,
          timestamp: new Date().toISOString()
        }
      }
    };

    try {
      const response = await fetch(`${this.baseUrl}/support`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.VITE_BECKN_API_KEY}`
        },
        body: JSON.stringify(supportPayload)
      });

      return await response.json();
    } catch (error) {
      console.error('Beckn support error:', error);
      return null;
    }
  }

  private parseSearchResponse(data: any): BecknProvider[] {
    if (!data.message || !data.message.catalog) {
      return [];
    }

    return data.message.catalog.providers || [];
  }

  private parseOrderResponse(data: any): BecknOrder | null {
    if (!data.message || !data.message.order) {
      return null;
    }

    return data.message.order;
  }

  // Register as a provider (for hosts)
  async registerProvider(providerData: Partial<BecknProvider>): Promise<string | null> {
    const context = this.generateContext('register');
    
    const registerPayload = {
      context,
      message: {
        provider: providerData
      }
    };

    try {
      const response = await fetch(`${this.baseUrl}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.VITE_BECKN_API_KEY}`
        },
        body: JSON.stringify(registerPayload)
      });

      const data = await response.json();
      return data.provider_id || null;
    } catch (error) {
      console.error('Beckn register error:', error);
      return null;
    }
  }

  // Update provider catalog
  async updateCatalog(providerId: string, catalog: Partial<BecknProvider>): Promise<boolean> {
    const context = this.generateContext('update');
    
    const updatePayload = {
      context,
      message: {
        provider_id: providerId,
        catalog
      }
    };

    try {
      const response = await fetch(`${this.baseUrl}/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.VITE_BECKN_API_KEY}`
        },
        body: JSON.stringify(updatePayload)
      });

      return response.ok;
    } catch (error) {
      console.error('Beckn update error:', error);
      return false;
    }
  }
}

export const becknService = new BecknProtocolService();