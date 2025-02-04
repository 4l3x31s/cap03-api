export interface PersonasDto {
  page:        number;
  per_page:    number;
  total:       number;
  total_pages: number;
  data:        DataPersonas[];
  support:     Support;
}

export interface DataPersonas {
  id:         number;
  email:      string;
  first_name: string;
  last_name:  string;
  avatar:     string;
}

export interface Support {
  url:  string;
  text: string;
}
