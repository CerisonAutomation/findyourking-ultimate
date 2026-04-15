export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          user_id: string;
          display_name: string;
          bio: string | null;
          age: number;
          gender: string;
          looking_for: string;
          city: string;
          country: string;
          lat: number | null;
          lng: number | null;
          photos: string[];
          is_verified: boolean;
          is_profile_complete: boolean;
          last_active_at: string;
          age_min: number;
          age_max: number;
          max_distance_km: number;
          pref_looking_for: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          display_name: string;
          bio?: string | null;
          age: number;
          gender: string;
          looking_for: string;
          city: string;
          country: string;
          lat?: number | null;
          lng?: number | null;
          photos?: string[];
          is_verified?: boolean;
          is_profile_complete?: boolean;
          last_active_at?: string;
          age_min?: number;
          age_max?: number;
          max_distance_km?: number;
          pref_looking_for?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          display_name?: string;
          bio?: string | null;
          age?: number;
          gender?: string;
          looking_for?: string;
          city?: string;
          country?: string;
          lat?: number | null;
          lng?: number | null;
          photos?: string[];
          is_verified?: boolean;
          is_profile_complete?: boolean;
          last_active_at?: string;
          age_min?: number;
          age_max?: number;
          max_distance_km?: number;
          pref_looking_for?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      matches: {
        Row: {
          id: string;
          user_a_id: string;
          user_b_id: string;
          action_a: string;
          action_b: string;
          matched_at: string | null;
          status: string;
          conversation_id: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_a_id: string;
          user_b_id: string;
          action_a?: string;
          action_b?: string;
          matched_at?: string | null;
          status?: string;
          conversation_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_a_id?: string;
          user_b_id?: string;
          action_a?: string;
          action_b?: string;
          matched_at?: string | null;
          status?: string;
          conversation_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      conversations: {
        Row: {
          id: string;
          participants: string[];
          last_message_content: string | null;
          last_message_sender_id: string | null;
          last_message_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          participants: string[];
          last_message_content?: string | null;
          last_message_sender_id?: string | null;
          last_message_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          participants?: string[];
          last_message_content?: string | null;
          last_message_sender_id?: string | null;
          last_message_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      messages: {
        Row: {
          id: string;
          conversation_id: string;
          sender_id: string;
          content: string;
          type: string;
          read_by: string[];
          created_at: string;
        };
        Insert: {
          id?: string;
          conversation_id: string;
          sender_id: string;
          content: string;
          type?: string;
          read_by?: string[];
          created_at?: string;
        };
        Update: {
          id?: string;
          conversation_id?: string;
          sender_id?: string;
          content?: string;
          type?: string;
          read_by?: string[];
          created_at?: string;
        };
      };
      notifications: {
        Row: {
          id: string;
          user_id: string;
          type: string;
          title: string;
          body: string;
          is_read: boolean;
          data: Json;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          type: string;
          title: string;
          body: string;
          is_read?: boolean;
          data?: Json;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          type?: string;
          title?: string;
          body?: string;
          is_read?: boolean;
          data?: Json;
          created_at?: string;
        };
      };
      reports: {
        Row: {
          id: string;
          reporter_id: string;
          reported_profile_id: string;
          reason: string;
          description: string;
          status: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          reporter_id: string;
          reported_profile_id: string;
          reason: string;
          description: string;
          status?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          reporter_id?: string;
          reported_profile_id?: string;
          reason?: string;
          description?: string;
          status?: string;
          created_at?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}
