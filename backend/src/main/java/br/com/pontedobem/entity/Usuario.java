package br.com.pontedobem.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.Enumerated;
import jakarta.persistence.EnumType;

import br.com.pontedobem.enums.PerfilUsuario;

@Entity
@Table(name = "uso_usuario")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "uso_id")
    private Long id;

    @Column(name = "uso_nome", nullable = false, length = 150)
    private String nome;

    @Column(name = "uso_email", nullable = false, unique = true, length = 150)
    private String email;

    @Column(name = "uso_password", nullable = false, length = 255)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(name = "uso_perfil", nullable = false, length = 30)
    private PerfilUsuario perfil = PerfilUsuario.BENEFICIARIO;

    @Column(name = "uso_ativo", nullable = false)
    private boolean ativo = true;

    public Usuario(){}

    public Usuario(String nome, String email, String password){
        this.nome = nome;
        this.email = email;
        this.password = password;
    }

    public Long getId(){
        return this.id;
    }

    public String getNome(){
        return this.nome;
    }

    public String getEmail(){
        return this.email;
    }

    public String getPassword(){
        return this.password;
    }

    public PerfilUsuario getPerfil(){
        return this.perfil;
    }

    public Boolean getAtivo(){
        return this.ativo;
    }

    public void setNome(String nome){
        this.nome = nome;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public void setPassword(String password){
        this.password = password;
    }

    public void setPerfil(PerfilUsuario perfil){
        this.perfil = perfil;
    }

    public void setAtivo(Boolean ativo){
        this.ativo = ativo;
    }
}