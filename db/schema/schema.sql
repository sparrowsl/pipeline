CREATE TABLE public.bookmark_project (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    user_id uuid NULL,
    project_id uuid NULL,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    CONSTRAINT bookmark_project_pkey PRIMARY KEY (id),
    CONSTRAINT bookmark_project_project_id_fkey FOREIGN KEY (project_id) REFERENCES projects(id),
    CONSTRAINT bookmark_project_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id)
) TABLESPACE pg_default;

CREATE TABLE public.categories (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    title text NULL,
    description text NULL,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    sdg_id smallint NULL,
    image text NULL,
    CONSTRAINT categories_pkey PRIMARY KEY (id)
) TABLESPACE pg_default;

CREATE TABLE public.category_project (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    category_id uuid NULL,
    project_id uuid NULL,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    CONSTRAINT category_project_pkey PRIMARY KEY (id),
    CONSTRAINT category_project_category_id_fkey FOREIGN KEY (category_id) REFERENCES categories(id),
    CONSTRAINT category_project_project_id_fkey FOREIGN KEY (project_id) REFERENCES projects(id)
) TABLESPACE pg_default;

CREATE TABLE public.dpg_status (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    name text NULL,
    criteria text NULL,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    CONSTRAINT dpg_status_pkey PRIMARY KEY (id)
) TABLESPACE pg_default;

CREATE TABLE public.profile (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    name text NOT NULL,
    user_type text NULL,
    github text NULL,
    skills json NULL,
    interests json[] NULL,
    points integer NULL,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    user_id uuid NOT NULL,
    image text NULL,
    bio text NULL,
    country text NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT profile_user_id_key UNIQUE (user_id),
    CONSTRAINT profile_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id)
) TABLESPACE pg_default;

CREATE TABLE public.project_dpg_status (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    project_id uuid NULL,
    status_id uuid NULL,
    CONSTRAINT project_dpg_status_pkey PRIMARY KEY (id),
    CONSTRAINT project_dpg_status_project_id_fkey FOREIGN KEY (project_id) REFERENCES projects(id),
    CONSTRAINT project_dpg_status_status_id_fkey FOREIGN KEY (status_id) REFERENCES dpg_status(id)
) TABLESPACE pg_default;

CREATE TABLE public.project_members (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    user_id uuid NULL,
    project_id uuid NULL,
    creator_id uuid NULL,
    CONSTRAINT project_members_pkey PRIMARY KEY (id),
    CONSTRAINT project_members_creator_id_fkey FOREIGN KEY (creator_id) REFERENCES auth.users(id),
    CONSTRAINT project_members_project_id_fkey FOREIGN KEY (project_id) REFERENCES projects(id),
    CONSTRAINT project_members_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id)
) TABLESPACE pg_default;

CREATE TABLE public.project_resource (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    project_id uuid NULL,
    type_resource text NULL,
    title text NULL,
    link text NULL,
    country text NULL,
    reason text NULL,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    user_id uuid NULL,
    CONSTRAINT project_resource_pkey PRIMARY KEY (id),
    CONSTRAINT project_resource_project_id_fkey FOREIGN KEY (project_id) REFERENCES projects(id),
    CONSTRAINT project_resource_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id)
) TABLESPACE pg_default;

CREATE TABLE public.project_update_comment (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    user_id uuid NULL,
    project_id uuid NULL,
    update_id uuid NULL,
    body text NULL,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    CONSTRAINT project_update_comment_pkey PRIMARY KEY (id),
    CONSTRAINT project_update_comment_project_id_fkey FOREIGN KEY (project_id) REFERENCES projects(id),
    CONSTRAINT project_update_comment_update_id_fkey FOREIGN KEY (update_id) REFERENCES project_updates(id),
    CONSTRAINT project_update_comment_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id)
) TABLESPACE pg_default;

CREATE TABLE public.project_updates (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    title text NULL,
    body text NULL,
    user_id uuid NULL,
        created_at timestamp with time zone NOT NULL DEFAULT now(),
    project_id uuid NULL,
    CONSTRAINT project_updates_pkey PRIMARY KEY (id),
    CONSTRAINT project_updates_project_id_fkey FOREIGN KEY (project_id) REFERENCES projects(id),
    CONSTRAINT project_updates_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id)
) TABLESPACE pg_default;

CREATE TABLE public.projects (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    user_id uuid NULL,
    title text NULL,
    bio text NULL,
    github_repo text NULL,
    funding_goal double precision NULL,
    current_funding double precision NULL,
    status text NULL,
    updated_at timestamp with time zone NULL,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    country text NULL,
    details text NULL,
    email text NULL,
    portfolio text NULL,
    linkedin text NULL,
    twitter text NULL,
    website text NULL,
    other text NULL,
    bank_acct text NULL,
    wallet_address text NULL,
    image text NULL,
    banner_image text NULL,
    CONSTRAINT projects_pkey PRIMARY KEY (id),
    CONSTRAINT projects_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id)
) TABLESPACE pg_default;

INSERT INTO
  public.categories (title, description, created_at, sdg_id, image)
VALUES
  (
    'Education',
    'Promoting quality education for all.',
    NOW(),
    4,
    'education.png'
  ),
  (
    'Health',
    'Ensuring healthy lives and promoting well-being for all.',
    NOW(),
    3,
    'health.png'
  ),
  (
    'Gender Equality',
    'Achieving gender equality and empowering all women and girls.',
    NOW(),
    5,
    'gender_equality.png'
  ),
  (
    'Clean Water',
    'Ensuring availability and sustainable management of water and sanitation for all.',
    NOW(),
    6,
    'clean_water.png'
  ),
  (
    'Affordable and Clean Energy',
    'Ensuring access to affordable, reliable, sustainable, and modern energy for all.',
    NOW(),
    7,
    'clean_energy.png'
  );

INSERT INTO
  public.dpg_status (NAME, criteria, created_at)
VALUES
  (
    'Not Started',
    'The project has not yet begun.',
    NOW()
  ),
  (
    'In Progress',
    'The project is currently underway.',
    NOW()
  ),
  (
    'Completed',
    'The project has been completed successfully.',
    NOW()
  ),
  (
    'On Hold',
    'The project is temporarily paused.',
    NOW()
  ),
  (
    'Cancelled',
    'The project has been cancelled.',
    NOW()
  );
