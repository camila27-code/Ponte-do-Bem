
CREATE DATABASE IF NOT EXISTS ponte_do_bem
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE ponte_do_bem;

CREATE TABLE psa_pessoa (
    psa_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    psa_nome VARCHAR(150) NOT NULL,
    psa_cpf CHAR(11) NOT NULL UNIQUE,
    psa_email VARCHAR(150),
    psa_telefone VARCHAR(20),
    psa_data_cadastro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    psa_ativo BOOLEAN NOT NULL DEFAULT TRUE,

    INDEX psa_idx_nome (psa_nome)
);

CREATE TABLE ddr_doador (
    ddr_id BIGINT PRIMARY KEY,
    ddr_tipo_doador VARCHAR(30) NOT NULL DEFAULT 'FISICA',
    ddr_data_cadastro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT ddr_fk_pessoa
        FOREIGN KEY (ddr_id)
        REFERENCES psa_pessoa (psa_id)
);

CREATE TABLE bfo_beneficiario (
    bfo_id BIGINT PRIMARY KEY,
    bfo_renda_familiar DECIMAL(10,2) NOT NULL,
    bfo_quantidade_integrantes INT NOT NULL,
    bfo_data_cadastro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    bfo_prioritario BOOLEAN NOT NULL DEFAULT FALSE,

    CONSTRAINT bfo_fk_pessoa
        FOREIGN KEY (bfo_id)
        REFERENCES psa_pessoa (psa_id),

    CONSTRAINT bfo_chk_renda
        CHECK (bfo_renda_familiar >= 0),

    CONSTRAINT bfo_chk_integrantes
        CHECK (bfo_quantidade_integrantes >= 1),

    INDEX bfo_idx_prioritario (bfo_prioritario)
);

CREATE TABLE dcr_doacao (
    dcr_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    ddr_id BIGINT NOT NULL,
    bfo_id BIGINT NULL,
    dcr_nome VARCHAR(120) NOT NULL,
    dcr_descricao TEXT,
    dcr_quantidade INT NOT NULL,
    dcr_categoria VARCHAR(30) NOT NULL,
    dcr_status VARCHAR(20) NOT NULL DEFAULT 'DISPONIVEL',
    dcr_data_cadastro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    dcr_data_reserva DATETIME NULL,
    dcr_data_entrega DATETIME NULL,

    CONSTRAINT dcr_fk_doador
        FOREIGN KEY (ddr_id)
        REFERENCES ddr_doador (ddr_id),

    CONSTRAINT dcr_fk_beneficiario
        FOREIGN KEY (bfo_id)
        REFERENCES bfo_beneficiario (bfo_id),

    CONSTRAINT dcr_chk_quantidade
        CHECK (dcr_quantidade > 0),

    CONSTRAINT dcr_chk_categoria
        CHECK (dcr_categoria IN ('ALIMENTO', 'ROUPA', 'HIGIENE')),

    CONSTRAINT dcr_chk_status
        CHECK (dcr_status IN (
            'DISPONIVEL',
            'RESERVADA',
            'ENTREGUE',
            'CANCELADA'
        )),

    INDEX dcr_idx_status (dcr_status),
    INDEX dcr_idx_categoria (dcr_categoria),
    INDEX dcr_idx_doador (ddr_id),
    INDEX dcr_idx_beneficiario (bfo_id)
);



CREATE TABLE dca_doacao_alimento (
    dca_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    dcr_id BIGINT NOT NULL UNIQUE,
    dca_perecivel BOOLEAN NOT NULL DEFAULT FALSE,
    dca_data_validade DATE NULL,

    CONSTRAINT dca_fk_doacao
        FOREIGN KEY (dcr_id)
        REFERENCES dcr_doacao (dcr_id)
        ON DELETE CASCADE
);

CREATE TABLE drp_doacao_roupa (
    drp_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    dcr_id BIGINT NOT NULL UNIQUE,
    drp_tamanho VARCHAR(10),
    drp_tipo_roupa VARCHAR(50),
    drp_estado_conservacao VARCHAR(30),

    CONSTRAINT drp_fk_doacao
        FOREIGN KEY (dcr_id)
        REFERENCES dcr_doacao (dcr_id)
        ON DELETE CASCADE
);

CREATE TABLE dch_doacao_higiene (
    dch_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    dcr_id BIGINT NOT NULL UNIQUE,
    dch_lacrado BOOLEAN NOT NULL DEFAULT FALSE,
    dch_tipo_produto VARCHAR(60),

    CONSTRAINT dch_fk_doacao
        FOREIGN KEY (dcr_id)
        REFERENCES dcr_doacao (dcr_id)
        ON DELETE CASCADE
);

CREATE TABLE hds_historico_doacao (
    hds_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    dcr_id BIGINT NOT NULL,
    hds_status_anterior VARCHAR(20),
    hds_status_novo VARCHAR(20) NOT NULL,
    hds_data_alteracao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    hds_observacao VARCHAR(255),

    CONSTRAINT hds_fk_doacao
        FOREIGN KEY (dcr_id)
        REFERENCES dcr_doacao (dcr_id),

    INDEX hds_idx_doacao (dcr_id),
    INDEX hds_idx_data (hds_data_alteracao)
);
