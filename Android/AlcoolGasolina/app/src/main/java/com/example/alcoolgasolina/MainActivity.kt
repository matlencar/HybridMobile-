package com.example.alcoolgasolina

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Toast
import com.example.alcoolgasolina.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)
    }

    fun calcular(view: View) {
        var txtAlcool = binding.editPrecoAlcool.text.toString();
        var precoAlcool = txtAlcool.toDouble()

        var txtGasolina = binding.editPrecoGasolina.text.toString();
        var precoGasolina = txtGasolina.toDouble()

        var resultado: Double = precoAlcool / precoGasolina

        var mensagem = ""

        if (resultado > 0.7) {
            mensagem = "Gasolina"
        } else if (resultado < 0.7) {
            mensagem = "Alcool"
        }
        else {
            mensagem = "Tanto faz"
        }
        Toast.makeText(this, mensagem, Toast.LENGTH_LONG).show()
    }
}